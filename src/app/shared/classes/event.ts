
export interface Event {
  id?: string;
  address: string;
  affiliate: string;
  document: string;
  email: string;
  endDate: string;
  image: string;
  phone: string;
  price: string;
  startDate: string;
  statusReg: boolean;
  title: string;
  type: string;
  paragraphs: Array<string>;
}


export interface EventResponse {
  event: Event;
  id: string;
}

export interface Participants {
  name: string;
  surname: string;
  birthday: string;
  age: number;
  sex: string;
  city: string;
  phone: number;
  isTelegram: boolean;
  isViber: boolean;
  isWhatsApp: boolean;
  parentsPhone: number;
  itWasJun: boolean;
  itWasChild: boolean;
  iBelong: string;
  notes: string;
  id?: string;
}
