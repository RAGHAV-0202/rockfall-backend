import ApiResponse from "../utils/apiResponse.js";
import apiErrors from "../utils/apiError.js";
import SOSRequest from "../models/sos.models.js";
import asyncHandler from "../utils/asyncHandler.js";



const createSOSRequest = asyncHandler(async (req, res, next) => {
    const { userId, location, lat, long } = req.body;
    try {
        const sosRequest = await SOSRequest.create({ userId, location, lat, long });
        return ApiResponse.success(res, 201, "SOS request created successfully", sosRequest);
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to create SOS request", error);
    }
});

const getAllSOSRequests = asyncHandler(async (req, res, next) => {
    try {
        const sosRequests = await SOSRequest.find();
        return ApiResponse.success(res, 200, "SOS requests retrieved successfully", sosRequests);
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve SOS requests", error);
    }
});

const getSOSRequestById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    try {
        const sosRequest = await SOSRequest.findById(id);
        if (!sosRequest) {
            return ApiResponse.error(res, 404, "SOS request not found");
        }
        return ApiResponse.success(res, 200, "SOS request retrieved successfully", sosRequest);
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve SOS request", error);
    }
});

const updateSOSRequestStatus = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const sosRequest = await SOSRequest.findByIdAndUpdate(id, { status }, { new: true });
        if (!sosRequest) {
            return ApiResponse.error(res, 404, "SOS request not found");
        }
        return ApiResponse.success(res, 200, "SOS request status updated successfully", sosRequest);
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to update SOS request status", error);
    }
});

export { createSOSRequest, getAllSOSRequests, getSOSRequestById, updateSOSRequestStatus };