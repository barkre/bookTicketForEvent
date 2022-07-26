export interface Events{
  id?: number;
  title: string;
  date: string;
  place: string;
  description: string;
  aboutEvent: string;
  section: {
    availableTickets: number;
    theLowestTicketPrice: number;
    sectorRate: string;
    availableSeats: {
      placeId: string;
      price: number;
      seatClass: string;
    }
  }
}