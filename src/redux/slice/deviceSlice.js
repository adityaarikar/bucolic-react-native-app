import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  devices: [],
};

export const deviceSlice = createSlice({
  name: 'devices',
  initialState: initialState,
  reducers: {
    addDevice: (state, action) => {
      const newDevice = {
        deviceName: action.payload.deviceName,
        deviceIP: action.payload.deviceIP,
      };
      state.devices.push(newDevice);
    },
    deleteDevice: (state, action) => {
      return {
        ...state,
        device: state.devices.filter(
          device => device.deviceName != action.payload.deviceName,
        ),
      };
    },
  },
});

export const {addDevice} = deviceSlice.actions;

export default deviceSlice.reducer;
