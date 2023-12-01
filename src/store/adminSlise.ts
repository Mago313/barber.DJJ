import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { attachAuthToken, baseService, fillToken } from "../api/api";
import { IShippingFields } from "../types/admin";

interface AdminState {
  isAdmin: boolean;
  loading: boolean;
  error: any;
}

const initialState: AdminState = {
  loading: false,
  isAdmin: false,
  error: "",
};

export const signIn = createAsyncThunk(
  "token/getToken",
  async (admin: IShippingFields, thunkAPI) => {
    try {
      const { data } = await baseService.post("/auth/login", admin);
      attachAuthToken(data.refreshToken);
      fillToken(data.accessToken);
      console.log(data);
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// export const checkIsAdmin = createAsyncThunk(
//   "admin/isAdmin",
//   async (_, thunkAPI) => {
//     const token = Cookies.get("authorization");
//     attachAuthToken(token as string);
//     try {
//       await baseService.get("/admin");
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state) => {
      state.loading = false;
      state.isAdmin = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.isAdmin = false;
      state.error = action.payload;
    });
    // builder.addCase(checkIsAdmin.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = action.payload;
    // });
    // builder.addCase(checkIsAdmin.fulfilled, (state) => {
    //   state.loading = false;
    //   state.isAdmin = true;
    // });
  },
});

export default adminSlice.reducer;      