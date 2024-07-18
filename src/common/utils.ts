import { AppraisalStatus, AppraisalStatusVietnamese } from './type'

export const convertYesNoToBoolean = (value: string) => {
  return value.toLowerCase() === 'yes'
}

export const convertBooleanToYesNo = (value: boolean) => {
  return value ? 'yes' : 'no'
}

export const getVietnameseStatus = (
  status: AppraisalStatus | string
): string => {
  return AppraisalStatusVietnamese[status] || 'Unknown status'
}

function stringToColor(string: string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

export function stringAvatar(name: string, padding = 0) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      padding: padding
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }
}
