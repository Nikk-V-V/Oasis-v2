
export interface Event {
  address: string
  affiliate: string
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
