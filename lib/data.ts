// Content sourced from the workshop brief. `link` and `photo` are optional and
// can be filled in as they are provided.

export interface Person {
  name: string;
  role: string;
  affiliation: string;
  link?: string;
  photo?: string; // /images/people/<file>
}

export interface Group {
  id: string;
  title: string;
  people: Person[];
}

export const GROUPS: Group[] = [
  {
    id: "advisory-panel",
    title: "International Advisory & Review Panel",
    people: [
      { name: "Stanley Tong", role: "Internationally Acclaimed Film Director and Producer", affiliation: "", link: "https://en.wikipedia.org/wiki/Stanley_Tong" },
      { name: "Wu Yan", role: "Science-Fiction Writer and Professor", affiliation: "Southern University of Science and Technology" },
      { name: "Zhigang Wang", role: "Professor", affiliation: "Tsinghua University", link: "https://www.enad.tsinghua.edu.cn/info/1229/1363.htm" },
      { name: "Shengyi Ye", role: "Professor", affiliation: "Southern University of Science and Technology", link: "https://www.sustech.edu.cn/en/faculties/yeshengyi.html" },
      { name: "Zhonghua Yao", role: "Associate Professor", affiliation: "The University of Hong Kong" },
      { name: "Qiufan Chen", role: "Science-Fiction Writer and Assistant Professor", affiliation: "Hong Kong Metropolitan University" },
      { name: "Xian Xu", role: "Assistant Professor", affiliation: "Lingnan University" },
      { name: "Yansong Chen", role: "Assistant Professor", affiliation: "Beijing Normal University" },
      { name: "Shangchun Teng", role: "Research Assistant Professor", affiliation: "The University of Hong Kong" },
      { name: "Xiangsong Wang", role: "Research Assistant Professor", affiliation: "The University of Hong Kong" },
    ],
  },
  {
    id: "research-committee",
    title: "Research Advisory Committee",
    people: [
      { name: "Huamin Qu", role: "Dean and Chair Professor", affiliation: "The Hong Kong University of Science and Technology" },
      { name: "Xiaojuan Ma", role: "Associate Professor", affiliation: "The Hong Kong University of Science and Technology" },
      { name: "Sebastian Deterding", role: "Professor", affiliation: "Imperial College London" },
      { name: "Rebecca Fiebrink", role: "Professor", affiliation: "University of the Arts London" },
      { name: "Yulong Bian", role: "Visiting Professor", affiliation: "Nanyang Technological University" },
    ],
  },
  {
    id: "organizing-team",
    title: "Organizing Team",
    people: [
      { name: "Yuying Tang", role: "Team Leader · PhD Candidate", affiliation: "The Hong Kong University of Science and Technology" },
      { name: "Qingyue Cai", role: "Collaborator · Student", affiliation: "Renmin University of China" },
      { name: "Haotian Li", role: "Collaborator · Researcher", affiliation: "Microsoft Research Asia" },
      { name: "Jiaxiong Hu", role: "Collaborator · Postdoctoral Fellow", affiliation: "The Hong Kong University of Science and Technology", link: "https://jiaxiong.notion.site/Jiaxiong-Hu-fdd7394b52f74ae78ab438aa93164c3d" },
      { name: "Baiqiao Zhang", role: "Collaborator · PhD Student", affiliation: "The Hong Kong University of Science and Technology", link: "https://baiqiaozhang.cc/" },
    ],
  },
];

export interface Institution {
  name: string;
  logo?: string; // /logos/<file>
}

export const INSTITUTIONS: Institution[] = [
  { name: "HKUST" },
  { name: "Microsoft Research Asia" },
  { name: "The University of Hong Kong" },
  { name: "Imperial College London" },
  { name: "University of the Arts London" },
  { name: "Tsinghua University" },
  { name: "Nanyang Technological University" },
  { name: "The Central Academy of Drama" },
  { name: "Central Academy of Fine Arts" },
  { name: "Beijing Film Academy" },
  { name: "Georgia Institute of Technology" },
  { name: "Communication University of China" },
  { name: "Southern University of Science and Technology" },
  { name: "Hong Kong Baptist University" },
  { name: "Beijing Normal University" },
  { name: "Lingnan University" },
];
