import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiDataService } from "../services/apiDataServices";

export const addMerchandiseAction = createAsyncThunk(
  "addMerchandiseAction",
  async (data) => {
    const response = await apiDataService.postMerchandiseData(data);
    return data;
  }
);

export const addAlbumAction = createAsyncThunk(
  "addAlbumAction",
  async (data) => {
    const response = await apiDataService.postAlbumData(data);
    return data;
  }
);

export const getMerchandiseData = createAsyncThunk(
  "getMerchandsiseData",
  async (localId) => {
    const response = await apiDataService.getMerchandiseData(localId);
    return response;
  }
);

export const getAlbumData = createAsyncThunk(
  "getAlbumData",
  async (localId) => {
    const response = await apiDataService.getAlbumData(localId);
    return response;
  }
);
