// Personnel + institutions for the workshop. Photos live in public/images/people
// (amber-duotone portraits); logos in public/logos. `link`/`photo` are optional.

export interface Person {
  name: string;
  role: string;
  affiliation: string;
  link?: string;
  photo?: string; // relative path, e.g. "images/people/stanley-tong.jpg?v=4"
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
      { name: "Stanley Tong", role: "Internationally Acclaimed Film Director and Producer", affiliation: "", link: "https://en.wikipedia.org/wiki/Stanley_Tong", photo: "images/people/stanley-tong.jpg?v=4" },
      { name: "Wu Yan", role: "Science-Fiction Writer and Professor", affiliation: "Southern University of Science and Technology", link: "https://www.sustech.edu.cn/en/faculties/wuyan-2.html", photo: "images/people/wu-yan.jpg?v=4" },
      { name: "Zhigang Wang", role: "Professor", affiliation: "Tsinghua University", link: "https://www.enad.tsinghua.edu.cn/info/1229/1363.htm", photo: "images/people/zhigang-wang.jpg?v=4" },
      { name: "Shengyi Ye", role: "Professor", affiliation: "Southern University of Science and Technology", link: "https://www.sustech.edu.cn/en/faculties/yeshengyi.html", photo: "images/people/shengyi-ye.jpg?v=4" },
      { name: "Zhonghua Yao", role: "Associate Professor", affiliation: "The University of Hong Kong", link: "https://www.earthsciences.hku.hk/people/academic-staff/dr-yao-zhonghua", photo: "images/people/zhonghua-yao.jpg?v=4" },
      { name: "Baoyang Chen", role: "Lecturer", affiliation: "Central Academy of Fine Arts", link: "https://baoyangchen.com/", photo: "images/people/baoyang-chen.jpg?v=4" },
      { name: "Qiufan Chen", role: "Science-Fiction Writer and Assistant Professor", affiliation: "Hong Kong Metropolitan University", link: "https://www.hkmu.edu.hk/hlt/stanleychen/", photo: "images/people/qiufan-chen.jpg?v=4" },
      { name: "Xian Xu", role: "Assistant Professor", affiliation: "Lingnan University", link: "https://www.ln.edu.hk/daci/our-people/faculty/prof-xian-xu", photo: "images/people/xian-xu.jpg?v=4" },
      { name: "Yansong Chen", role: "Assistant Professor", affiliation: "Beijing Normal University" },
      { name: "Shangchun Teng", role: "Research Assistant Professor", affiliation: "The University of Hong Kong", photo: "images/people/shangchun-teng.jpg?v=4" },
      { name: "Xiangsong Wang", role: "Research Assistant Professor", affiliation: "The University of Hong Kong", photo: "images/people/xiangsong-wang.jpg?v=4" },
    ],
  },
  {
    id: "research-committee",
    title: "Research Advisory Committee",
    code: "B",
    people: [
      { name: "Huamin Qu", role: "Dean and Chair Professor", affiliation: "The Hong Kong University of Science and Technology", link: "https://cse.hkust.edu.hk/admin/people/faculty/profile/huamin", photo: "images/people/huamin-qu.jpg?v=4" },
      { name: "Xiaojuan Ma", role: "Associate Professor", affiliation: "The Hong Kong University of Science and Technology", link: "https://cse.hkust.edu.hk/admin/people/faculty/profile/mxj", photo: "images/people/xiaojuan-ma.jpg?v=4" },
      { name: "Sebastian Deterding", role: "Professor", affiliation: "Imperial College London", link: "https://profiles.imperial.ac.uk/s.deterding", photo: "images/people/sebastian-deterding.jpg?v=4" },
      { name: "Rebecca Fiebrink", role: "Professor", affiliation: "University of the Arts London", link: "https://www.arts.ac.uk/creative-computing-institute/people/rebecca-fiebrink", photo: "images/people/rebecca-fiebrink.jpg?v=4" },
      { name: "Yulong Bian", role: "Visiting Professor", affiliation: "Nanyang Technological University" },
    ],
  },
  {
    id: "research-team",
    title: "Research Team",
    code: "C",
    people: [
      { name: "Yuying Tang", role: "Team Leader · PhD Candidate", affiliation: "The Hong Kong University of Science and Technology", link: "https://yuyingtang1999.github.io/", photo: "images/people/yuying-tang.jpg?v=4" },
      { name: "Qingyue Cai", role: "Collaborator · Student", affiliation: "Renmin University of China" },
      { name: "Haotian Li", role: "Collaborator · Researcher", affiliation: "Microsoft Research Asia", link: "https://www.microsoft.com/en-us/research/people/haotianli/" },
      { name: "Jiaxiong Hu", role: "Collaborator · Postdoctoral Fellow", affiliation: "The Hong Kong University of Science and Technology", link: "https://jiaxiong.notion.site/Jiaxiong-Hu-fdd7394b52f74ae78ab438aa93164c3d" },
      { name: "Baiqiao Zhang", role: "Collaborator · PhD Student", affiliation: "The Hong Kong University of Science and Technology", link: "https://baiqiaozhang.cc/", photo: "images/people/baiqiao-zhang.jpg?v=4" },
    ],
  },
];

export interface Institution {
  name: string;
  logo: string; // relative path, e.g. "logos/hkust.png"
}

export const INSTITUTIONS: Institution[] = [
  { name: "The Hong Kong University of Science and Technology", logo: "logos/hkust.png" },
  { name: "Microsoft Research Asia", logo: "logos/msra.png" },
  { name: "The University of Hong Kong", logo: "logos/hku.png" },
  { name: "Imperial College London", logo: "logos/imperial.png" },
  { name: "University of the Arts London", logo: "logos/ual.png" },
  { name: "Tsinghua University", logo: "logos/tsinghua.png" },
  { name: "Nanyang Technological University", logo: "logos/ntu.png" },
  { name: "The Central Academy of Drama", logo: "logos/cad.png" },
  { name: "Central Academy of Fine Arts", logo: "logos/cafa.png" },
  { name: "Beijing Film Academy", logo: "logos/bfa.png" },
  { name: "Georgia Institute of Technology", logo: "logos/gatech.png" },
  { name: "Communication University of China", logo: "logos/cuc.png" },
  { name: "Southern University of Science and Technology", logo: "logos/sustech.png" },
  { name: "Hong Kong Baptist University", logo: "logos/hkbu.png" },
  { name: "Beijing Normal University", logo: "logos/bnu.png" },
  { name: "Lingnan University", logo: "logos/lingnan.png" },
];
