export const TRIPLERS_UNCONFIRMED = [
  {
    id: "1",
    status: "unconfirmed",
    first_name: "Lauren",
    last_name: "R",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
]

export const TRIPLERS_PENDING = [
  {
    id: "2",
    status: "pending",
    first_name: "Michael",
    last_name: "Marsh",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
]

export const TRIPLERS_CONFIRMED = [
  {
    id: "3",
    status: "confirmed",
    first_name: "Mike",
    last_name: "Marsher",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
]

export const TRIPLERS_FULL = [
  ...TRIPLERS_UNCONFIRMED,
  {
    id: "4",
    status: "unconfirmed",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
  ...TRIPLERS_PENDING,
  {
    id: "5",
    status: "pending",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
  {
    id: "6",
    status: "pending",
    first_name: "Lauren",
    last_name: "Ralph",
    address: { address1: "1 Road Rd", city: "Denver", state: "CO" },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
  ...TRIPLERS_CONFIRMED,
  {
    id: "7",
    status: "confirmed",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
]

export const TRIPLERS_FULL_WITH_AMBASSADOR = [
  ...TRIPLERS_UNCONFIRMED,
  ...TRIPLERS_PENDING,
  ...TRIPLERS_CONFIRMED,
  {
    id: "8",
    status: "pending",
    first_name: "Michael",
    last_name: "Marsh",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: true
  },
  {
    id: "9",
    status: "pending",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: false
  },
  {
    id: "10",
    status: "pending",
    first_name: "Lauren",
    last_name: "Ralph",
    address: { address1: "1 Road Rd", city: "Denver", state: "CO" },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: true
  },
  {
    id: "11",
    status: "confirmed",
    first_name: "Michael",
    last_name: "Marsh",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: false
  },
  {
    id: "12",
    status: "confirmed",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: true
  },
]

export const TRIPLERS_TO_ADD = [
  {
    id: "a",
    name: "Judy Blume",
    address: "1 Really Long Address Ln Lorem Ipsum Lorem Ipsum",
  },
  {
    id: "b",
    name: "Edison Shepherd",
    address: "1 Good Boy Rd",
  },
  {
    id: "c",
    name: "Lauren Ralph",
    address: "1 Road Rd",
  },
  {
    id: "d",
    name: "Pamela Jones",
    address: "1 Jones Road Rd",
  },
  {
    id: "e",
    name: "Torr Carbin",
    address: "31 Autumn Leaf Avenue",
  },
  {
    id: "f",
    name: "Stepha Gleadhell",
    address: "1716 Warner Drive",
  },
  {
    id: "g",
    name: "Charmaine Kilalea",
    address: "378 Carey Alley",
  },
  {
    id: "h",
    name: "Janeczka Pauletto",
    address: "16 Lukken Trail",
  },
  {
    id: "i",
    name: "Guthry Ondrich",
    address: "7673 Moose Parkway",
  },
  {
    id: "j",
    name: "Nils Aspinall",
    address: "4 Mendota Plaza",
  },
  {
    id: "k",
    name: "Vaclav Comolli",
    address: "186 Dryden Pass",
  },
  {
    id: "l",
    name: "Xylina Blakey",
    address: "23824 Toban Lane",
  },
  {
    id: "m",
    name: "Tann Robrow",
    address: "49337 Waywood Circle",
  },
  {
    id: "n",
    name: "Gretchen Kenningham",
    address: "3599 Declaration Center",
  },
  {
    id: "o",
    name: "Karel Colledge",
    address: "23602 Myrtle Circle",
  },
  {
    id: "p",
    name: "Tremain Greenhouse",
    address: "3 Leroy Plaza",
  },
  {
    id: "q",
    name: "Venita Perryn",
    address: "5 Judy Pass",
  },
  {
    id: "r",
    name: "Neal Cherrett",
    address: "6 Merrick Road",
  },
  {
    id: "s",
    name: "Abagail Kershaw",
    address: "2 Merrick Park",
  },
  {
    id: "t",
    name: "Vidovik Michelotti",
    address: "7899 David Junction",
  },
  {
    id: "u",
    name: "Clyve Tirrell",
    address: "21357 Brentwood Crossing",
  },
  {
    id: "v",
    name: "Jeannine O'Loinn",
    address: "86170 Mifflin Terrace",
  },
  {
    id: "w",
    name: "Alaric Musselwhite",
    address: "05 Weeping Birch Drive",
  },
  {
    id: "x",
    name: "Trefor Merit",
    address: "1 Surrey Road",
  },
  {
    id: "y",
    name: "Ramon Breed",
    address: "85 Kipling Terrace",
  },
  {
    id: "z",
    name: "Joann Pawden",
    address: "2 Hollow Ridge Parkway",
  },
]
