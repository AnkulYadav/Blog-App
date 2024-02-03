import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import User from '../models/user.model.js';



const registerUser = asyncHandler(async (req, res) => {

    const {  name, email, password } = req.body;


    if (
        [ name, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({ email })
    if (existedUser) {
        throw new ApiError(409, `User with email ${email} already exists`); 
    }


    const avatarLocalPath = req.files?.avatar[0]?.path


    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is Required");
    }
    // Save image to cloudinary and get the url of images

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Failed to save Avatar Image on Cloudinary")
    }

    const user = await User.create({
        name,
        avatar: avatar.url,
        email,
        password,
    })


    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something Went Wrong While Registering ")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered Successfully...!!!")
    )
});

export { registerUser }