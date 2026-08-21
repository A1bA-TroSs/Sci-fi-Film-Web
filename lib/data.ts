// Personnel + institutions for the workshop. Photos live in public/images/people
// (amber-duotone portraits); logos in public/logos. `link`/`photo` are optional.

export interface Person {
  name: string;
  role: string;
  affiliation: string;
  link?: string;
  photo?: string; // relative path, e.g. "images/people/stanley-tong.jpg?v=6"
}

export interface Group {
  id: string;
  title: string;
  code: string; // dossier section code
  people: Person[];
}

export const GROUPS: Group[] = [
  {
    id: "advisory-panel",
    title: "International Advisory & Review Panel",
    code: "A",
    people: [
      { name: "Stanley Tong", role: "Internationally Acclaimed Film Director and Producer", affiliation: "", link: "https://en.wikipedia.org/wiki/Stanley_Tong", photo: "images/people/stanley-tong.jpg?v=6" },
      { name: "Wu Yan", role: "Science-Fiction Writer and Professor", affiliation: "Southern University of Science and Technology", link: "https://www.sustech.edu.cn/en/faculties/wuyan-2.html", photo: "images/people/wu-yan.jpg?v=6" },
      { name: "Zhigang Wang", role: "Professor", affiliation: "Tsinghua University", link: "https://www.enad.tsinghua.edu.cn/info/1229/1363.htm", photo: "images/people/zhigang-wang.jpg?v=6" },
      { name: "Shengyi Ye", role: "Professor", affiliation: "Southern University of Science and Technology", link: "https://www.sustech.edu.cn/en/faculties/yeshengyi.html", photo: "images/people/shengyi-ye.jpg?v=6" },
      { name: "Zhonghua Yao", role: "Associate Professor", affiliation: "The University of Hong Kong", link: "https://www.earthsciences.hku.hk/people/academic-staff/dr-yao-zhonghua", photo: "images/people/zhonghua-yao.jpg?v=6" },
      { name: "Pan Hui", role: "Chair Professor", affiliation: "The Hong Kong University of Science and Technology (Guangzhou)", link: "https://panhui.people.ust.hk/", photo: "images/people/pan-hui.jpg?v=6" },
      { name: "Qiufan Chen", role: "Science-Fiction Writer and Assistant Professor", affiliation: "Hong Kong Metropolitan University", link: "https://www.hkmu.edu.hk/hlt/stanleychen/", photo: "images/people/qiufan-chen.jpg?v=6" },
      { name: "Xian Xu", role: "Assistant Professor", affiliation: "Lingnan University", link: "https://www.ln.edu.hk/daci/our-people/faculty/prof-xian-xu", photo: "images/people/xian-xu.jpg?v=6" },
      { name: "Baoyang Chen", role: "Lecturer", affiliation: "Central Academy of Fine Arts", link: "https://baoyangchen.com/", photo: "images/people/baoyang-chen.jpg?v=6" },
      { name: "Yansong Chen", role: "Lecturer", affiliation: "Beijing Normal University" },
      { name: "Shangchun Teng", role: "Research Assistant Professor", affiliation: "The University of Hong Kong", link: "https://www.earthsciences.hku.hk/people/academic_staff/111/", photo: "images/people/shangchun-teng.jpg?v=6" },
      { name: "Xiangsong Wang", role: "Research Assistant Professor", affiliation: "The University of Hong Kong", link: "https://www.earthsciences.hku.hk/people/academic_staff/121/", photo: "images/people/xiangsong-wang.jpg?v=6" },
    ],
  },
  {
    id: "research-committee",
    title: "Research Advisory Committee",
    code: "B",
    people: [
      { name: "Huamin Qu", role: "Dean and Chair Professor", affiliation: "The Hong Kong University of Science and Technology", link: "https://cse.hkust.edu.hk/admin/people/faculty/profile/huamin", photo: "images/people/huamin-qu.jpg?v=6" },
      { name: "Xiaojuan Ma", role: "Associate Professor", affiliation: "The Hong Kong University of Science and Technology", link: "https://cse.hkust.edu.hk/admin/people/faculty/profile/mxj", photo: "images/people/xiaojuan-ma.jpg?v=6" },
      { name: "Sebastian Deterding", role: "Professor", affiliation: "Imperial College London", link: "https://profiles.imperial.ac.uk/s.deterding", photo: "images/people/sebastian-deterding.jpg?v=6" },
      { name: "Rebecca Fiebrink", role: "Professor", affiliation: "University of the Arts London", link: "https://www.arts.ac.uk/creative-computing-institute/people/rebecca-fiebrink", photo: "images/people/rebecca-fiebrink.jpg?v=6" },
      { name: "Yulong Bian", role: "Visiting Professor", affiliation: "Nanyang Technological University", link: "https://ieeexplore.ieee.org/author/37085666170", photo: "images/people/yulong-bian.jpg?v=6" },
    ],
  },
  {
    id: "research-team",
    title: "Research Team",
    code: "C",
    people: [
      { name: "Yuying Tang", role: "Team Leader · PhD Candidate", affiliation: "The Hong Kong University of Science and Technology", link: "https://yuyingtang1999.github.io/", photo: "images/people/yuying-tang.jpg?v=6" },
      { name: "Qingyue Cai", role: "Collaborator · Student", affiliation: "Renmin University of China" },
      { name: "Haotian Li", role: "Collaborator · Researcher", affiliation: "Microsoft Research Asia", link: "https://www.microsoft.com/en-us/research/people/haotianli/", photo: "images/people/haotian-li.jpg?v=6" },
      { name: "Jiaxiong Hu", role: "Collaborator · Postdoctoral Fellow", affiliation: "The Hong Kong University of Science and Technology", link: "https://jiaxiong.notion.site/Jiaxiong-Hu-fdd7394b52f74ae78ab438aa93164c3d", photo: "images/people/jiaxiong-hu.jpg?v=6" },
      { name: "Baiqiao Zhang", role: "Collaborator · PhD Student", affiliation: "The Hong Kong University of Science and Technology", link: "https://baiqiaozhang.cc/", photo: "images/people/baiqiao-zhang.jpg?v=6" },
    ],
  },
];

export interface Institution {
  name: string;
  logo: string; // relative path, e.g. "logos/hkust-c.png"
  featured?: boolean; // the five lead institutions — shown larger / first
}

// Order: five lead institutions first (HKUST → IC → UAL → MSRA → HKU), then the rest.
export const INSTITUTIONS: Institution[] = [
  { name: "The Hong Kong University of Science and Technology", logo: "logos/hkust-c.png", featured: true },
  { name: "Imperial College London", logo: "logos/imperial-c.png", featured: true },
  { name: "University of the Arts London", logo: "logos/ual-c.png", featured: true },
  { name: "Microsoft Research Asia", logo: "logos/msra-c.png", featured: true },
  { name: "The University of Hong Kong", logo: "logos/hku-c.png", featured: true },
  { name: "Tsinghua University", logo: "logos/tsinghua-c.png" },
  { name: "Nanyang Technological University", logo: "logos/ntu-c.png" },
  { name: "The Central Academy of Drama", logo: "logos/cad-c.png" },
  { name: "Central Academy of Fine Arts", logo: "logos/cafa-c.png" },
  { name: "The Hong Kong University of Science and Technology (Guangzhou)", logo: "logos/hkust-gz-c.png" },
  { name: "Beijing Film Academy", logo: "logos/bfa-c.png" },
  { name: "Communication University of China", logo: "logos/cuc-c.png" },
  { name: "Southern University of Science and Technology", logo: "logos/sustech-c.png" },
  { name: "Hong Kong Baptist University", logo: "logos/hkbu-c.png" },
  { name: "Beijing Normal University", logo: "logos/bnu-c.png" },
  { name: "Lingnan University", logo: "logos/lingnan-c.png" },
];
