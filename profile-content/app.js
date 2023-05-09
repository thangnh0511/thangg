// ---- TAB ----
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

console.log(tabs[0].hash)
console.log(panes)

let tabsID = []

for(let i = 0; i < tabs.length; i++) {
  let id = tabs[i].hash
  let newStr = id.slice(1)
  tabsID.push(newStr)
}

console.log(tabsID)

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340

function requestIdleCallback() {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
  // --
  tabs.forEach((tab, index) => {
    const pane = panes[index];
  
    tab.onclick = function () {
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");
  
      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";
  
      this.classList.add("active");
      pane.classList.add("active");
    };
  });
};


function onClickTab(id) {
  requestIdleCallback()
}

// ---- END TAB ----
requestIdleCallback()

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});



var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})