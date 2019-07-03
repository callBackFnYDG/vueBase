// 身份证验证
export const IS_CARD = new RegExp(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/)
export const IS_CARD_15 = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/)
export const IS_CARD_18 = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
export const IS_CARD_ARR_INT = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
export const IS_CARD_ARR_CH = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

// 电话验证正则
export const IS_TEL = new RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)

// 邮箱验证正则
export const IS_E_MAIL = new RegExp(/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/)

// 中文验证正则
export const IS_CHINESE = new RegExp(/^[\u4e00-\u9fa5]+$/g)
