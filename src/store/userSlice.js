import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";

export const loginUser = createAsyncThunk(
    "users/loginUser",
    async ({ email, password }) => {
        const response = await api.post(`/users/login`, {
            email: email,
            password: password,
        });
        const { data } = response;
        localStorage.setItem("token", `${data.token}`);
        console.log(localStorage['token']);

        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        return data;
    }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ email, password, username }) => {
    const response = await api.post(
      `/users/register`,

      { username: username, email: email, password: password }
    );
    const { data } = response;
    return data;
  }
);
export const pathUser = createAsyncThunk(
  "users/pathUser",
  async ({ id, username, password }) => {
    if(password)
{    const response = await api.patch(`/users/${id}`,
      { 
        username: username, 
        password: password 
      }
    );
    const { data } = response;
 console.log(data);
    return data;
  }else{
    const response = await api.patch(`/users/${id}`,
      { 
        username: username 
      }
    );
    const { data } = response;
 console.log(data);
    return data;
  }
  }
);
export const getUser = createAsyncThunk("users/getUser", async (id) => {
  const response = await api.get(`/users/${id}`);
  const { data } = response;

  return data;
});

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {

    const response = await api.delete(`/users/${id}`);
    const { data } = response;
    console.log(data);
    return data;
  }
);
export const newPasswordUser = createAsyncThunk(
  "users/newPasswordUser",
  async ({ email}) => {
      const response = await api.post(`/users/password-reset`, {
          email: email
     
      });
      const { data } = response;


console.log(data);
  
      return data;
  }
);
export const userReducer = createSlice({
  name: "users",
  initialState: {
    user: null,
    userId: null,
    author: null,
    editUser: null,
    isAuth: null,
    status: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setId: (state, action) => {
      state.userId = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      state.userId = action.payload.user.userId;
      state.author = action.payload.user.username;
      state.isAuth = true;
      // console.log(state.isAuth);
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [registerUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.editUser = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [pathUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [pathUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [pathUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const { setUser, setAuth, setId } = userReducer.actions;
export default userReducer.reducer;
