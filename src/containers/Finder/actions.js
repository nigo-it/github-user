import {
    REQUESTED_PROFILE,
    RECEIVED_PROFILE,
    FAILED_PROFILE
} from './constants'

export const requestProfile = () => ({
    type: REQUESTED_PROFILE,
})

export const receiveProfile = (profile) => ({
    type: RECEIVED_PROFILE,
    data: profile,
})

export const failProfile = () => ({
    type: FAILED_PROFILE,
})

