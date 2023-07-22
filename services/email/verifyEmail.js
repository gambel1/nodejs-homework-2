const {User} = require('../../models')

const verifyEmail = async (req, res) => {
  try {
    const { verificationToken } = req.params;
    console.log(req.params);
    const user = await User.findOne({ verificationToken });
    if (!user) {
      throw new Error("Email not found");
    }
    await User.findByIdAndUpdate(user._id, {
      verify: true,
      verificationToken: null,
    });
    res.json({ message: "Verification successful" });
  } catch (error) {
    res.status(res.statusCode).json({
      error: error.message,
    });
  }
};

module.exports = verifyEmail;
