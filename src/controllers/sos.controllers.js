import ApiResponse from "../utils/apiResponse.js";
import apiError from "../utils/apiError.js";
import SOSRequest from "../models/sos.models.js";
import asyncHandler from "../utils/asyncHandler.js";

// Create SOS Request
const createSOSRequest = asyncHandler(async (req, res, next) => {
    const { userId, location, lat, long } = req.body;

    const sosRequest = await SOSRequest.create({ userId, location, lat, long });

    return res.status(201).json(
        new ApiResponse(201, sosRequest, "SOS request created successfully")
    );
});

// Get All SOS Requests
const getAllSOSRequests = asyncHandler(async (req, res, next) => {
    const sosRequests = await SOSRequest.find();

    return res.status(200).json(
        new ApiResponse(200, sosRequests, "SOS requests retrieved successfully")
    );
});

// Get SOS Request by ID
const getSOSRequestById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const sosRequest = await SOSRequest.findById(id);

    if (!sosRequest) {
        throw new apiError(404, "SOS request not found");
    }

    return res.status(200).json(
        new ApiResponse(200, sosRequest, "SOS request retrieved successfully")
    );
});

// Update SOS Request Status
const updateSOSRequestStatus = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;

    const sosRequest = await SOSRequest.findByIdAndUpdate(
        id,
        { status },
        { new: true }
    );

    if (!sosRequest) {
        throw new apiError(404, "SOS request not found");
    }

    return res.status(200).json(
        new ApiResponse(200, sosRequest, "SOS request status updated successfully")
    );
});

export {
    createSOSRequest,
    getAllSOSRequests,
    getSOSRequestById,
    updateSOSRequestStatus
};
