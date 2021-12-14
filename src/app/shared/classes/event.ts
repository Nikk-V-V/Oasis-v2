
export interface Event {
  id?: string;
  title: string;
  info: string[];
  price: number;
  additionalPrice: number;
  startDate: string;
  endDate: string;
  statusReg: string;
  type: string;
  document: string;
  image: string;
  startTime: string;
  endTime: string;
  importantly: string;
  contactsForLiaison?: string;
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
  email: string;
  isTelegram: boolean;
  isViber: boolean;
  isWhatsApp: boolean;
  parentPhone: number;
  itWasJun: boolean;
  itWasChild: boolean;
  iBelong: string;
  notes: string;
  id?: string;
}
