const User = require("../Model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const signUpController = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);   

    try {
      let user = await User.findOne({username});
      if (user) {
        return res.status(400).json({message: "User Already Exists"});
      }

      user = new User({username, password});

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      const payload = {
        user: {
          id: user.id,
          username: user.username
        }
      };

      jwt.sign(payload, "randomString",{expiresIn: 10000}, (err, token) => 
        {
          if (err) throw err;
          res.status(200).json({ token , success: true });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({message:"Error in Saving"});
    }
  }

  const loginController = async (req, res) => {
    const { username, password } = req.body;
    try {
      let user = await User.findOne({
        username
      });
      if (!user) return res.status(400).json({message: "User does not exist"});

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({message: "Incorrect Password !"});

      const payload = {
        user: {
          id: user.id,
          email : user.email
        }
      };

      

      jwt.sign( payload, "randomString",{expiresIn: 3600},
        (err, token) => {
          if (err) throw err;
          // res.cookie("token", token , {expiresIn: '2h'})
          res.status(200).cookie("token", token , {expiresIn: '2h'}).json({token, success: true});
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({message: "Server Error"});
    }
  }

  const getMe = async (req, res) => {

    console.log("req.recieved");
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json({user: user, success: true});
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
}

  module.exports = { signUpController , loginController, getMe };