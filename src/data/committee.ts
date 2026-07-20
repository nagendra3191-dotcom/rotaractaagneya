// Committee data. Portrait numbers refer to PDF pages (1-33).
export type Member = {
  name: string;
  role: string;
  category: "core" | "director" | "member";
  portrait?: number; // PDF page number
  rid?: string; // Rotary International member ID
};

export const committee: Member[] = [
  // CORE COMMITTEE
  { name: "Rtr. Sai Pavan A", role: "President", category: "core", portrait: 4, rid: "RID 1001" },
  { name: "IPP. Rtr. Hitha Suresh", role: "Immediate Past President", category: "core", portrait: 3, rid: "RID 1002" },
  { name: "PP. Rtn. Rtr. Nagendra Babu", role: "Club Advisor", category: "core", portrait: 1, rid: "RID 1003" },
  { name: "PP. Rtn. Rtr. Indranil Roy Chowdhury", role: "Club Advisor", category: "core", portrait: 2, rid: "RID 1004" },
  { name: "Rtr. Shahid Khan A", role: "Club Mentor", category: "core", portrait: 10, rid: "RID 1005" },
  { name: "Rtr. Laasya A Bhagawan", role: "Vice President", category: "core", portrait: 5, rid: "RID 1006" },
  { name: "PP. Rtr. Vishal S", role: "Secretary — Administration", category: "core", portrait: 6, rid: "RID 1007" },
  { name: "Rtr. Vikram A Murthy", role: "Secretary — Operations", category: "core", portrait: 7, rid: "RID 1008" },
  { name: "Rtr. Ishita Poddar", role: "Treasurer", category: "core", portrait: 8, rid: "RID 1009" },
  { name: "Rtr. Krupan Shetty", role: "Sergeant-at-Arms", category: "core", portrait: 9, rid: "RID 1010" },

  // DIRECTORS & CHAIRS
  { name: "IPP. Rtr. Sameen Mehnaz Fathima", role: "Community Service Director", category: "director", portrait: 11, rid: "RID 2001" },
  { name: "Rtr. Vishwanath", role: "Joint Community Service Director", category: "director", portrait: 12, rid: "RID 2002" },
  { name: "Rtr. Farheen Taj", role: "Club Service Director", category: "director", portrait: 13, rid: "RID 2003" },
  { name: "Rtr. Raja SujaySimha Nayak", role: "Joint Club Service Director", category: "director", portrait: 14, rid: "RID 2004" },
  { name: "Rtr. Chaveneesh", role: "Professional Development Director", category: "director", portrait: 15, rid: "RID 2005" },
  { name: "Rtr. Vishal N", role: "Joint Professional Development Director", category: "director", portrait: 16, rid: "RID 2006" },
  { name: "Rtr. Pavithra Ganta", role: "International Service Director", category: "director", portrait: 17, rid: "RID 2007" },
  { name: "Rtr. Madhav K", role: "Joint International Service Director", category: "director", portrait: 18, rid: "RID 2008" },
  { name: "Rtr. Harsha P", role: "Public Relations Director", category: "director", portrait: 21, rid: "RID 2009" },
  { name: "Rtr. Nikhila K", role: "Joint Public Relations Director", category: "director", portrait: 20, rid: "RID 2010" },
  { name: "Rtr. Yogesh Gowda", role: "Public Relations Director", category: "director", portrait: 19, rid: "RID 2011" },
  { name: "Rtr. Swati Singh", role: "Next Gen Service Director", category: "director", portrait: 22, rid: "RID 2012" },
  { name: "Rtr. Suraj", role: "Joint Next Gen Service Director", category: "director", portrait: 23, rid: "RID 2013" },

  // PROUD MEMBERS
  { name: "Rtr. Abhishek", role: "Member", category: "member", rid: "RID 3001" },
  { name: "Rtr. Babu", role: "Member", category: "member", rid: "RID 3002" },
  { name: "Rtr. Bhumi Sharma", role: "Member", category: "member", portrait: 24, rid: "RID 3003" },
  { name: "Rtr. Bhuvan", role: "Member", category: "member", portrait: 25, rid: "RID 3004" },
  { name: "Rtr. Chandu D S", role: "Member", category: "member", portrait: 26, rid: "RID 3005" },
  { name: "Rtr. Charikashree", role: "Member", category: "member", portrait: 27, rid: "RID 3006" },
  { name: "Rtr. Deeksha DK", role: "Member", category: "member", portrait: 28, rid: "RID 3007" },
  { name: "Rtr. Jayaram", role: "Member", category: "member", rid: "RID 3008" },
  { name: "Rtr. Joyal Joshie George", role: "Member", category: "member", rid: "RID 3009" },
  { name: "Rtr. Naveen C", role: "Member", category: "member", portrait: 29, rid: "RID 3010" },
  { name: "Rtr. Pallavi", role: "Member", category: "member", portrait: 30, rid: "RID 3011" },
  { name: "Rtr. Rakesh S", role: "Member", category: "member", portrait: 31, rid: "RID 3012" },
  { name: "Rtr. Sanjana", role: "Member", category: "member", rid: "RID 3013" },
  { name: "Rtr. Shreya Mishra", role: "Member", category: "member", rid: "RID 3014" },
  { name: "Rtr. Sourabh J Inamdar", role: "Member", category: "member", portrait: 32, rid: "RID 3015" },
  { name: "Rtr. Sridevi B S", role: "Member", category: "member", portrait: 33, rid: "RID 3016" },
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
