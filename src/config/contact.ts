export const contact = {
  email: "bozpcoach@gmail.com",
  phone: "+420721381805",
  address: "Moravská 854/2, Doubravka, 31200 Plzeň",
};

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
}
