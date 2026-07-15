// Committee data. Portrait numbers refer to PDF pages (1-33).
export type Member = {
  name: string;
  role: string;
  category: "core" | "director" | "member";
  portrait?: number; // PDF page number
};

export const committee: Member[] = [
  // CORE COMMITTEE
  { name: "PP. Rtn. Rtr. Nagendra Babu", role: "Club Advisor", category: "core", portrait: 1 },
  { name: "PP. Rtn. Rtr. Indranil Roy Chowdhury", role: "Club Advisor", category: "core", portrait: 2 },
  { name: "IPP. Rtr. Hitha Suresh", role: "Immediate Past President", category: "core", portrait: 3 },
  { name: "Rtr. Sai Pavan A", role: "President", category: "core", portrait: 4 },
  { name: "Rtr. Laasya A Bhagawan", role: "Vice President", category: "core", portrait: 5 },
  { name: "PP. Rtr. Vishal S", role: "Secretary — Administration", category: "core", portrait: 6 },
  { name: "Rtr. Vikram A Murthy", role: "Secretary — Operations", category: "core", portrait: 7 },
  { name: "Rtr. Ishita Poddar", role: "Treasurer", category: "core", portrait: 8 },
  { name: "Rtr. Krupan Shetty", role: "Sergeant-at-Arms", category: "core", portrait: 9 },
  { name: "Rtr. Shahid Khan A", role: "Club Mentor", category: "core", portrait: 10 },

  // DIRECTORS & CHAIRS
  { name: "IPP. Rtr. Sameen Mehnaz Fathima", role: "Community Service Director", category: "director", portrait: 11 },
  { name: "Rtr. Vishwanath", role: "Community Service — Joint Director", category: "director", portrait: 12 },
  { name: "Rtr. Farheen Taj", role: "Club Service Director", category: "director", portrait: 13 },
  { name: "Rtr. Raja SujaySimha Nayak", role: "Club Service — Joint Director", category: "director", portrait: 14 },
  { name: "Rtr. Chaveneesh", role: "Professional Service Director", category: "director", portrait: 15 },
  { name: "Rtr. Vishal N", role: "Professional Service — Joint Director", category: "director", portrait: 16 },
  { name: "Rtr. Pavithra Ganta", role: "International Service Director", category: "director", portrait: 17 },
  { name: "Rtr. Madhav K", role: "International Service — Joint Director", category: "director", portrait: 18 },
  { name: "Rtr. Harsha P", role: "PR & Editorial Director", category: "director", portrait: 19 },
  { name: "Rtr. Nikhila K", role: "PR & Editorial Director", category: "director", portrait: 20 },
  { name: "Rtr. Yogesh Gowda", role: "PR & Editorial Director", category: "director", portrait: 21 },
  { name: "Rtr. Swati Singh", role: "NextGen Director", category: "director", portrait: 22 },
  { name: "Rtr. Suraj", role: "NextGen — Joint Director", category: "director", portrait: 23 },

  // PROUD MEMBERS
  { name: "Rtr. Abhishek", role: "Member", category: "member" },
  { name: "Rtr. Babu", role: "Member", category: "member" },
  { name: "Rtr. Bhumi Sharma", role: "Member", category: "member", portrait: 24 },
  { name: "Rtr. Bhuvan", role: "Member", category: "member", portrait: 25 },
  { name: "Rtr. Chandu D S", role: "Member", category: "member", portrait: 26 },
  { name: "Rtr. Charikashree", role: "Member", category: "member", portrait: 27 },
  { name: "Rtr. Deeksha DK", role: "Member", category: "member", portrait: 28 },
  { name: "Rtr. Jayaram", role: "Member", category: "member" },
  { name: "Rtr. Joyal Joshie George", role: "Member", category: "member" },
  { name: "Rtr. Naveen C", role: "Member", category: "member", portrait: 29 },
  { name: "Rtr. Pallavi", role: "Member", category: "member", portrait: 30 },
  { name: "Rtr. Rakesh S", role: "Member", category: "member", portrait: 31 },
  { name: "Rtr. Sanjana", role: "Member", category: "member" },
  { name: "Rtr. Shreya Mishra", role: "Member", category: "member" },
  { name: "Rtr. Sourabh J Inamdar", role: "Member", category: "member", portrait: 32 },
  { name: "Rtr. Sridevi B S", role: "Member", category: "member", portrait: 33 },
];

// Eagerly import all portrait pointers so Vite bundles the URLs.
const portraitModules = import.meta.glob<{ default: { url: string } }>(
  "../assets/portraits/member-*.jpg.asset.json",
  { eager: true },
);

export function portraitUrl(n?: number): string | undefined {
  if (!n) return undefined;
  const key = `../assets/portraits/member-${n}.jpg.asset.json`;
  return portraitModules[key]?.default?.url;
}
