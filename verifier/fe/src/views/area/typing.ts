export interface Resp {
    message?: string;
    data: Object;
}

export interface RespData {
    publicKey?: string; 
    signData?: string; 
    bid?: string; 
    randomCode?: string;
    certType?: number;
    certBid?: string;
    
}
