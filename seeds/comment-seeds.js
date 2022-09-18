const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'https://www.indeed.com/viewjob?jk=75e683ae770d8a30&tk=1gd8r7048gaht805&from=serp&vjs=3',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'https://www.indeed.com/viewjob?jk=afc76d28a728844f&tk=1gd8r7048gaht805&from=serp&vjs=3',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'https://www.indeed.com/viewjob?cmp=Full-Circle-Financial-Services&t=Junior+Developer&jk=da216014640823da&q=junior+developer&vjs=3',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Cipher Tech Solutions is looking for a Junior Level Android level Reverse Engineer. If you are good with mobile devices this could be a great opportunity for you. Its worth doing the research.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Just went to an interview with Amazon, it seems like a toxic environment and talk about diversity but dont uphold themselves to this standard.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Are you good with game programming? there is a job posting for a junior software engineer in tampa.https://www.indeed.com/viewjob?jk=bb9a6b766ca4d285&tk=1gd8r7048gaht805&from=serp&vjs=3',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'EASY INTERVIEW QUESTION GOT HARDER: check out this link for some interview questions:https://stackoverflow.com/questions/3492302/easy-interview-question-got-harder-given-numbers-1-100-find-the-missing-numbe ',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Friend had an interview at Google today, I thought this tricky question was interesting and i am having some issues wrapping my head around it. Does anyone have any thoughts? Follow link to stackoverflow. https://stackoverflow.com/questions/5505894/tricky-google-interview-question',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Morbi a ipsum.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
   }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
