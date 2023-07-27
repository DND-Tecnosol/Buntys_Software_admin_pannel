import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import apiRoutes, { appAxios } from '../../../Constants/apiRoutes'

const initialState = {
  data: {
    client_id: 0,
    totale: 0,
    miNtotale: 0,

    benifits: 0,

    Offers_is: false,
    Offers_amount: 0,
    Vaoucher_is: false,
    Vaoucher_amount: 0,
    Reward_is: false,
    Reward_amount: 0,
    Wish_is: false,
    Wish_amount: 0,
    Discount_is: false,
    Discount_amount: 0,

    service: [],
    product: [],
    pkg: [],
    createpkg: [],
    hairweg: [],
    hairExtention: [],
    hairWegRepair: [],

    serviceTotale: 0,
    pkgTotale: 0,
    hairwegTotale: 0,
    hairExtentionTotale: 0,

    gst: false,
    appointment: true,
    gst: 0,
  }
}

const createPkg = {
  pkgName: " ",
  pkgTotale: 0,
  pkgDiscount: 0,
  pkgService: [],
}

const serviceInvoiceSchema = {
  serviceId: null,
  servicePrice: 0,
  serviceMinPrice: 0,
  serviceTotalePrice: 0,
  staffId: 0,
  costomerId: 0,
  serviceQty: 1,
  serviceDisc: 0,
}

const productInvoiceSchema = {
  productId: null,
  productPrice: 0,
  productTotalePrice: 0,
  staffId: 0,
  costomerId: 0,
  productQty: 1,
  productDisc: 0,
}

const invoiceItemsSlice = createSlice({
  name: "invoiceItems",
  initialState,
  reducers: {
    remItems: (state, action) => {
      state.items.splice(state.items.findIndex(a => state.items.serviceId === action.payload.id), 1)
      state.totale = state.totale -= action.payload.totale
    },
    allItemsRem: (state, action) => {
      state.data.service = []
      state.data.service = []
      state.data.totale = 0
    },


    remService: (state, action) => {
      state.data.service.splice(state.data.service.findIndex(a => a.serviceId === action.payload.id), 1)
      // state.totale=state.data.totale-=Number(action.payload.price)
    },
    addService: (state, action) => {
      state.data.service.push(serviceInvoiceSchema)
    },
    changeService: (state, action) => {
      state.data.service[action.payload.key].serviceId = action.payload.id;
      state.data.service[action.payload.key].servicePrice = action.payload.price;
      state.data.service[action.payload.key].serviceMinPrice = action.payload.minprice;
      state.data.service[action.payload.key].serviceTotalePrice = state.data.service[action.payload.key].servicePrice * state.data.service[action.payload.key].serviceQty;
    },
    changeServiceStaff: (state, action) => {
      state.data.service[action.payload.key].staffId = action.payload.staffId;
    },
    changeServiceQty: (state, action) => {
      state.data.service[action.payload.key].serviceQty = action.payload.value;
      state.data.service[action.payload.key].serviceTotalePrice = Number(action.payload.value) * (state.data.service[action.payload.key].servicePrice - (state.data.service[action.payload.key].servicePrice * (state.data.service[action.payload.key].serviceDisc / 100)));
    },
    changeServiceDisc: (state, action) => {
      const checkMinPrice = state.data.service[action.payload.key].servicePrice - (state.data.service[action.payload.key].servicePrice * (Number(action.payload.value) / 100));

      if (!(checkMinPrice > state.data.service[action.payload.key].serviceMinPrice)) {
        state.data.service[action.payload.key].serviceDisc = 0;
        state.data.service[action.payload.key].serviceTotalePrice = state.data.service[action.payload.key].serviceQty * (state.data.service[action.payload.key].servicePrice - (state.data.service[action.payload.key].servicePrice * (Number(0) / 100)));

      } else {
        state.data.service[action.payload.key].serviceDisc = action.payload.value;
        state.data.service[action.payload.key].serviceTotalePrice = state.data.service[action.payload.key].serviceQty * (state.data.service[action.payload.key].servicePrice - (state.data.service[action.payload.key].servicePrice * (Number(action.payload.value) / 100)))
      }
    },

    remPoduct: (state, action) => {
      state.data.product.splice(state.data.product.findIndex(a => a.productId === action.payload.id), 1)
      state.totale = state.data.totale -= Number(action.payload.price)
    },
    addPoduct: (state, action) => {
      state.data.product.push(productInvoiceSchema)
    },
    changePoduct: (state, action) => {
      state.data.product[action.payload.key].productId = action.payload.id;
      state.data.product[action.payload.key].productPrice = action.payload.price;
      state.data.product[action.payload.key].productTotalePrice = state.data.product[action.payload.key].productPrice * state.data.product[action.payload.key].productQty;
    },
    changePoductStaff: (state, action) => {
      console.log(action.payload);
      state.data.product[action.payload.key].staffId = action.payload.staffId;
    },
    changePoductQty: (state, action) => {
      state.data.product[action.payload.key].productQty = action.payload.value;
      state.data.product[action.payload.key].productTotalePrice = Number(action.payload.value) * state.data.product[action.payload.key].productPrice;
    },
    setTotaleValue: (state, action) => void (state.data.totale = action.payload),


    // Apply Benifits
    removeOffers: (s, a) => {
      s.data.Offers_is = false;
      s.data.Offers_amount = 0;
      switch (a.payload.offer.offeraplicable) {
        case 'service':
          removeService(s, a, 'offer');
          break
        case 'product':
          removeproduct(s, a, 'offer');

          break
        case 'weg':

          break
        case 'extention':

          break
        case 'patch':

          break
        default:
          //code

          break;
      }
    },
    applyOffers: (s, a) => {
      if (!(s.data.totale <= a.payload.offer.minsale)) {
        // return 0;
        s.data.Offers_is = true;

        // findMatchingServiceIds()
        switch (a.payload.offer.offeraplicable) {
          case 'service':
            service(s, a, 'offer')
            break
          case 'product':
            product(s, a, 'offer')
            break
          case 'weg':
            weg(s, a, 'offer')
            break
          case 'extention':
            extention(s, a, 'offer')
            break
          case 'patch':
            patch(s, a, 'offer')
            break
          default:
            //code

            break;
        }
      } else {
        toast.error(`Offers Can Apply Only Minimum Totale Amount ${a.payload.offer.minsale}`)
      }
    },
    applyVoucher: (s, a) => {
      // console.log(a.payload.vaoucher);
      if (!(s.data.totale <= a.payload.vaoucher.minsale)) {
        s.data.Vaoucher_is = true;
        s.data.Vaoucher_amount = a.payload.vaoucher.benifit;

        toast.success("Applied Voucher Successfully")
        switch (a.payload.vaoucher.Applicable) {
          case 'service':
            service(s, a, 'vaoucher')
            break
          case 'product':
            product(s, a, 'vaoucher')
            break
          case 'weg':
            weg(s, a, 'vaoucher')
            break
          case 'extention':
            extention(s, a, 'vaoucher')
            break
          case 'patch':
            patch(s, a, 'vaoucher')
            break
          default:
            //code

            break;
        }
      } else {
        toast.error(`voucher Can Apply Only Minimum Totale Amount ${a.payload.vaoucher.minsale}`)
      }
      // toast.error(data.msg)
    },
    removeVoucher: (s, a) => {
      s.data.Vaoucher_is = false;
      toast.error("Removed Voucher Successfully")
      s.data.Vaoucher_amount = 0;
      switch (a.payload.vaoucher.Applicable) {
        case 'service':
          removeService(s, a, 'vaoucher')
          break
        case 'product':
          removeproduct(s, a, 'vaoucher')
          break
        case 'weg':
          removeweg(s, a, 'vaoucher')
          break
        case 'extention':
          removeextention(s, a, 'vaoucher')
          break
        case 'patch':
          removepatch(s, a, 'vaoucher')
          break
        default:
          //code

          break;
      }
      // toast.error(e.data.msg)
    },

  }
});


export const { removeVoucher, applyVoucher, removeOffers, applyOffers, addItems, remItems, setTotaleValue, remPoduct, allItemsRem, addPoduct, changePoduct, changePoductStaff, changePoductQty, remService, addService, changeService, changeServiceStaff, changeServiceQty, changeServiceDisc } = invoiceItemsSlice.actions

export default invoiceItemsSlice.reducer

function findMatchingServiceIds(array1, array2, key1, key2) {
  const matchingIds = [];

  // Loop through the first array
  for (let i = 0; i < array1.length; i++) {
    const serviceId = array1[i][key1];

    // Check if the service ID exists in the second array
    const match = array2.find(item => item[key2] === serviceId);

    if (match) {
      matchingIds.push(serviceId);
    }
  }
  console.log(matchingIds);
  return matchingIds;
}


const service = (s, a, key,) => {
  const offersPrice = (offerprice) => offerprice / findMatchingServiceIds(s.data.service, a.payload[key].service, 'serviceId', 'service_id').length;
  const giveValue = (sid) => a.payload[key].service.some(val => val.service_id == sid)
  for (let i = 0; i < s.data.service.length; i++) {
    if (giveValue(s.data.service[i].serviceId)) {
      if (a.payload[key].BenifitsType == "disc") {
        const disc = a.payload[key].benifit
        s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * (s.data.service[i].servicePrice - (s.data.service[i].servicePrice * (disc / 100)));
        s.data.service[i].serviceDisc = disc;
        s.data.Offers_amount = s.data.Offers_amount + (s.data.service[i].servicePrice - s.data.service[i].servicePrice * (disc / 100));
      } else {
        s.data.Offers_amount = a.payload.offer.benifit;
        s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * (s.data.service[i].servicePrice - offersPrice(a.payload[key].benifit))
      }
    }
  }
  toast(`${key.toUpperCase()} Applied In ${findMatchingServiceIds(s.data.service, a.payload[key].service, 'serviceId', 'service_id').length} Services`)
}

const product = (s, a, key,) => {
  const offersPrice = (offerprice) => offerprice / findMatchingServiceIds(s.data.product, a.payload[key].product, 'productId', 'product_id').length;
  const giveValue = (sid) => a.payload[key].product.some(val => val.product_id == sid)
  for (let i = 0; i < s.data.product.length; i++) {
    if (giveValue(s.data.product[i].productId)) {
      if (a.payload[key].BenifitsType == "disc") {
        const disc = a.payload[key].benifit
        s.data.product[i].productTotalePrice = s.data.product[i].productQty * (s.data.product[i].productPrice - (s.data.product[i].productPrice * (disc / 100)));
        s.data.product[i].productDisc = disc;
        s.data.Offers_amount =  s.data.Offers_amount + (s.data.product[i].productQty *(s.data.product[i].productPrice - (s.data.product[i].productPrice - s.data.product[i].productPrice * (disc / 100))));
      } else {
        s.data.Offers_amount = a.payload.offer.benifit;
        s.data.product[i].productTotalePrice = s.data.product[i].productQty * (s.data.product[i].productPrice - offersPrice(a.payload[key].benifit))
      }
    }
  }
  toast(`${key.toUpperCase()} Applied In ${findMatchingServiceIds(s.data.product, a.payload[key].product, 'productId', 'product_id').length} Product`)
}

const weg = (s, a, key,) => {
  const offersPrice = (offerprice) => offerprice / findMatchingServiceIds(s.data.service, a.payload[key].service).length;
  const giveValue = (sid) => a.payload[key].weg.some(val => val.service_id == sid)
  for (let i = 0; i < s.data.service.length; i++) {
    // console.log(i);
    if (giveValue(s.data.service[i].serviceId)) {
      if (a.payload[key].BenifitsType == "disc") {
        const disc = a.payload[key].benifit
        s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * (s.data.service[i].servicePrice - (s.data.service[i].servicePrice * (disc / 100)));
        s.data.service[i].serviceDisc = disc;
        s.data.Offers_amount = s.data.Offers_amount + (s.data.service[i].servicePrice - s.data.service[i].servicePrice * (disc / 100));
      } else {
        s.data.Offers_amount = a.payload.offer.benifit;
        s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * (s.data.service[i].servicePrice - offersPrice(a.payload[key].benifit))
      }
    }
  }
  toast(`${key.toUpperCase()} Applied In ${findMatchingServiceIds(s.data.service, a.payload[key].weg).length} Weg`)
}

const extention = (s, a, key,) => {
  const offersPrice = (offerprice) => offerprice / findMatchingServiceIds(s.data.service, a.payload[key].service).length;
  const giveValue = (sid) => a.payload[key].extention.some(val => val.service_id == sid)
  for (let i = 0; i < s.data.service.length; i++) {
    // console.log(i);
    if (giveValue(s.data.service[i].serviceId)) {
      if (a.payload[key].BenifitsType == "disc") {
        const disc = a.payload[key].benifit
        s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * (s.data.service[i].servicePrice - (s.data.service[i].servicePrice * (disc / 100)));
        s.data.service[i].serviceDisc = disc;
        s.data.Offers_amount = s.data.Offers_amount + (s.data.service[i].servicePrice - s.data.service[i].servicePrice * (disc / 100));
      } else {
        s.data.Offers_amount = a.payload.offer.benifit;
        s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * (s.data.service[i].servicePrice - offersPrice(a.payload[key].benifit))
      }
    }
  }
  toast(`${key.toUpperCase()} Applied In ${findMatchingServiceIds(s.data.service, a.payload[key].extention).length} Extention`)
}

const patch = (s, a, key,) => {
  const offersPrice = (offerprice) => offerprice / findMatchingServiceIds(s.data.service, a.payload[key].service).length;
  const giveValue = (sid) => a.payload[key].patch.some(val => val.service_id == sid)
  for (let i = 0; i < s.data.service.length; i++) {
    // console.log(i);
    if (giveValue(s.data.service[i].serviceId)) {
      if (a.payload[key].BenifitsType == "disc") {
        const disc = a.payload[key].benifit
        s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * (s.data.service[i].servicePrice - (s.data.service[i].servicePrice * (disc / 100)));
        s.data.service[i].serviceDisc = disc;
        s.data.Offers_amount = s.data.Offers_amount + (s.data.service[i].servicePrice - s.data.service[i].servicePrice * (disc / 100));
      } else {
        s.data.Offers_amount = a.payload.offer.benifit;
        s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * (s.data.service[i].servicePrice - offersPrice(a.payload[key].benifit))
      }
    }
  }
  toast(`${key.toUpperCase()} Applied In ${findMatchingServiceIds(s.data.service, a.payload[key].patch).length} Patch`)
}

/* 
For Remove Applicabel Offers Voucher
*/

const removeService = (s, a, key,) => {
  for (let i = 0; i < s.data.service.length; i++) {
    // console.log(i);
    s.data.service[i].serviceTotalePrice = s.data.service[i].servicePrice * s.data.service[i].serviceQty;
    s.data.service[i].serviceDisc = 0;
  }
  toast(`${key.toUpperCase()} Removed In Services`)
}

const removeproduct = (s, a, key,) => {
  for (let i = 0; i < s.data.product.length; i++) {
    s.data.product[i].productTotalePrice = s.data.product[i].productQty * s.data.product[i].productPrice;
    s.data.product[i].productDisc = 0;
  }
  toast(`${key.toUpperCase()} Removed In ${findMatchingServiceIds(s.data.product, a.payload[key].product, 'productId', 'product_id').length} Product`)
}

const removeweg = (s, a, key,) => {
  for (let i = 0; i < s.data.service.length; i++) {
    // console.log(i);
    if (a.payload[key].BenifitsType == "disc") {
      s.data.service[i].serviceTotalePrice = s.data.service[i].servicePrice * s.data.service[i].serviceQty;
      s.data.service[i].serviceDisc = 0;
    } else {
      s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * s.data.service[i].servicePrice
    }
  }
  toast(`${key.toUpperCase()} Removed In ${findMatchingServiceIds(s.data.service, a.payload[key].service).length} Weg`)
}

const removeextention = (s, a, key,) => {
  for (let i = 0; i < s.data.service.length; i++) {
    // console.log(i);
    if (a.payload[key].BenifitsType == "disc") {
      s.data.service[i].serviceTotalePrice = s.data.service[i].servicePrice * s.data.service[i].serviceQty;
      s.data.service[i].serviceDisc = 0;
    } else {
      s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * s.data.service[i].servicePrice
    }
  }
  toast(`${key.toUpperCase()} Removed In ${findMatchingServiceIds(s.data.service, a.payload[key].service).length} Extention`)
}

const removepatch = (s, a, key,) => {
  for (let i = 0; i < s.data.service.length; i++) {
    // console.log(i);
    if (a.payload[key].BenifitsType == "disc") {
      s.data.service[i].serviceTotalePrice = s.data.service[i].servicePrice * s.data.service[i].serviceQty;
      s.data.service[i].serviceDisc = 0;
    } else {
      s.data.service[i].serviceTotalePrice = s.data.service[i].serviceQty * s.data.service[i].servicePrice
    }
  }
  toast(`${key.toUpperCase()} Removed In ${findMatchingServiceIds(s.data.service, a.payload[key].service).length} Patch`)
}

