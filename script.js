// document.querySelector('.cta').addEventListener('click', () => {
//     alert('Get ready to join the best study sessions!');
//   });
 
//   // Handle New Topic Form Submission
// document.querySelector('.new-topic-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('New topic posted successfully!');
//   });
  // Select elements
const topicList = document.getElementById('topic-list');
const newTopicForm = document.getElementById('new-topic-form');
const topicTitle = document.getElementById('topic-title');
const topicContent = document.getElementById('topic-content');

// Load topics from local storage when the page loads
document.addEventListener('DOMContentLoaded', loadTopics);

// Add new topic
newTopicForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload on form submission

  const title = topicTitle.value;
  const content = topicContent.value;

  const newTopic = {
    title: title,
    content: content,
    replies: [],
  };

  saveTopic(newTopic);
  renderTopic(newTopic);
  newTopicForm.reset(); // Clear form fields
});

// Load topics from local storage
function loadTopics() {
  const topics = JSON.parse(localStorage.getItem('topics')) || [];
  topics.forEach(renderTopic);
}

// Save a new topic to local storage
function saveTopic(topic) {
  const topics = JSON.parse(localStorage.getItem('topics')) || [];
  topics.push(topic);
  localStorage.setItem('topics', JSON.stringify(topics));
}

// Render a single topic
function renderTopic(topic) {
  const topicDiv = document.createElement('div');
  topicDiv.classList.add('topic');

  topicDiv.innerHTML = `
    <h4>${topic.title}</h4>
    <p>${topic.content}</p>
    <button class="reply-btn">Reply</button>
    <div class="replies"></div>
    <form class="reply-form hidden">
      <input type="text" placeholder="Your reply..." required />
      <button type="submit">Post Reply</button>
    </form>
  `;

  const replyBtn = topicDiv.querySelector('.reply-btn');
  const replyForm = topicDiv.querySelector('.reply-form');
  const repliesDiv = topicDiv.querySelector('.replies');

  // Toggle reply form visibility
  replyBtn.addEventListener('click', () => {
    replyForm.classList.toggle('hidden');
  });

  // Handle reply submission
  replyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const replyInput = replyForm.querySelector('input');
    const replyText = replyInput.value;

    topic.replies.push(replyText);
    saveRepliesToStorage();
    renderReply(replyText, repliesDiv);

    replyInput.value = ''; // Clear input field
  });

  // Render existing replies
  topic.replies.forEach((reply) => renderReply(reply, repliesDiv));

  topicList.appendChild(topicDiv);
}

// Render a single reply
function renderReply(reply, repliesDiv) {
  const replyP = document.createElement('p');
  replyP.textContent = reply;
  repliesDiv.appendChild(replyP);
}

// Save updated replies to local storage
function saveRepliesToStorage() {
  const topics = Array.from(topicList.children).map((topicDiv) => {
    const title = topicDiv.querySelector('h4').textContent;
    const content = topicDiv.querySelector('p').textContent;
    const replies = Array.from(topicDiv.querySelectorAll('.replies p')).map(
      (p) => p.textContent
    );

    return { title, content, replies };
  });

  localStorage.setItem('topics', JSON.stringify(topics));
}

// Add 'loaded' class to body after DOM is ready
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Quiz Page Loaded. Ready to play!");
});



///////  NEW CODE



// Load topics from localStorage
function loadTopics() {
  const topics = JSON.parse(localStorage.getItem('topics')) || [];
  const topicList = document.getElementById('topic-list');
  topicList.innerHTML = '';
  topics.forEach((topic) => {
    const topicDiv = createTopicElement(topic);
    topicList.appendChild(topicDiv);
  });
}

// Create topic element
function createTopicElement(topic) {
  const topicDiv = document.createElement('div');
  topicDiv.classList.add('topic');
  topicDiv.innerHTML = `
    <h4>${topic.title}</h4>
    <p>${topic.content}</p>
    <button class="reply-btn">Reply</button>
    <div class="replies">${topic.replies.map(reply => `<p>${reply}</p>`).join('')}</div>
    <form class="reply-form hidden">
      <input type="text" placeholder="Your reply..." required />
      <button type="submit">Post Reply</button>
    </form>
  `;
  attachReplyFunctionality(topic, topicDiv);
  return topicDiv;
}

// Attach reply functionality
function attachReplyFunctionality(topic, topicDiv) {
  const replyForm = topicDiv.querySelector('.reply-form');
  const repliesDiv = topicDiv.querySelector('.replies');
  const replyBtn = topicDiv.querySelector('.reply-btn');
  replyBtn.addEventListener('click', () => {
    replyForm.classList.toggle('hidden');
  });
  replyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const replyText = replyForm.querySelector('input').value;
    topic.replies.push(replyText);
    saveTopics();
    const replyP = document.createElement('p');
    replyP.textContent = replyText;
    repliesDiv.appendChild(replyP);
    replyForm.reset();
  });
}

// Save topics to localStorage
function saveTopics() {
  const topics = [...document.getElementById('topic-list').children].map(topicDiv => {
    const title = topicDiv.querySelector('h4').textContent;
    const content = topicDiv.querySelector('p').textContent;
    const replies = [...topicDiv.querySelectorAll('.replies p')].map(reply => reply.textContent);
    return { title, content, replies };
  });
  localStorage.setItem('topics', JSON.stringify(topics));
}

// Add new topic
document.getElementById('new-topic-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('topic-title').value;
  const content = document.getElementById('topic-content').value;
  const newTopic = { title, content, replies: [] };
  const topicDiv = createTopicElement(newTopic);
  document.getElementById('topic-list').appendChild(topicDiv);
  saveTopics();
  e.target.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', loadTopics);







