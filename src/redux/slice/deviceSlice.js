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
        deviceType: action.payload.deviceType,
      };
      state.devices.push(newDevice);
    },
    deleteDevice: (state, action) => {
      const deviceToRemoveName = action.payload;
      state.devices = state.devices.filter(
        device => device.deviceName !== deviceToRemoveName,
      );
    },
  },
});

export const {addDevice, deleteDevice} = deviceSlice.actions;

export default deviceSlice.reducer;
