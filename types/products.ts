export interface Product{
    _id : string;
  title : string;
    _type : "product";
    productImage? :{
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description? : string;
}