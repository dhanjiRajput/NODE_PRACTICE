const URL = require("../Models/url_model")
const shortid = require("shortid");

const handleGenerateNewShortUrl = async (req, res) => {
    const shortID = shortid(8);
    const body = req.body;

    if (!body.redirectURL) return res.status(400).json({ eror: "URl is Required...." });
    await URL.create({
        shortId: shortID,
        redirectURL: body.redirectURL,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

const redirectToLongUrl = async (req, res) => {
    const shortId = req.params.shortId;

    const entry=await URL.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    );
    res.redirect(entry.redirectURL);
};

const getVisitHistory = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId });

    return res.json({
        totalclicks:entry.visitHistory.length,
        Visit:entry.visitHistory,
    });
};

module.exports = { handleGenerateNewShortUrl, redirectToLongUrl,getVisitHistory }