import {
    REQUESTED_PROFILE,
    RECEIVED_PROFILE,
    FAILED_PROFILE
} from './constants'

export const requestedProfile = () => ({
    type: REQUESTED_PROFILE,
})

export const receivedProfile = (profile) => ({
    type: RECEIVED_PROFILE,
    data: profile,
})

export const failedProfile = () => ({
    type: FAILED_PROFILE,
})

