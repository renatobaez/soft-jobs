import { createUser, userByEmail } from "../models/userModel.js"

const createNewUser = async (req, res) => {
  try {
    const newUser = await createUser(req.body)
    res.status(201).json({ user: newUser })
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getUserByEmail = async (req, res) => {
  try {
    const { email, rol, lenguage } = await userByEmail(req.user["email"])
    res.status(200).json([{email, rol, lenguage}])
  } catch (error) {
    console.log("error", error)
  }
}

export { createNewUser, getUserByEmail }
