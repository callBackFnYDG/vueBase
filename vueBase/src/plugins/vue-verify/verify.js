import * as auto from './autoConfig'
// 身份证验证
export function isCard(num) {
  num = num.toUpperCase()
  if (!((auto.IS_CARD).test(num))) {
    return false
  }
  var len, re, bGoodDay, dtmBirth, arrSplit, arrInt, arrCh, nTemp, valnum, i
  len = num.length
  arrInt = auto.IS_CARD_ARR_INT
  arrCh = auto.IS_CARD_ARR_CH
  nTemp = 0
  if (len === 15) {
    re = auto.IS_CARD_15
    arrSplit = num.match(re)
    dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
    bGoodDay = (dtmBirth.getYear() === Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) === Number(arrSplit[3])) && (dtmBirth.getDate() === Number(arrSplit[4]))
    if (!bGoodDay) {
      return false
    } else {
      num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6)
      for (i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i]
      }
      num += arrCh[nTemp % 11]
      return true
    }
  }
  if (len === 18) {
    re = auto.IS_CARD_18
    arrSplit = num.match(re)
    dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
    bGoodDay = (dtmBirth.getFullYear() === Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) === Number(arrSplit[3])) && (dtmBirth.getDate() === Number(arrSplit[4]))
    if (!bGoodDay) {
      return false
    } else {
      for (i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i]
      }
      valnum = arrCh[nTemp % 11]
      if (valnum !== num.substr(17, 1)) {
        return false
      }
      return true
    }
  }
  return false
}

// 验证电话号码
export function isTel(num) {
  return (auto.IS_TEL).test(num)
}

// 验证邮箱
export function isEMail(num) {
  return (auto.IS_E_MAIL).test(num)
}

// 验证中文字符
export function isChinese(txt) {
  return (auto.IS_CHINESE).test(txt)
}
