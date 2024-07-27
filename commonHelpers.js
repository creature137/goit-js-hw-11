import{i as u,S as m}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function d(s){const r="45115917-7726aefcae109b05971acac93",l=`https://pixabay.com/api?${new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(l).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()})}function f(s,r,a){const l=s.hits;if(l.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",iconUrl:"../img/error.svg",position:"topRight",progressBarColor:"#b51b1b"});return}const e=l.slice(0,9);r.innerHTML=g(e),a.refresh()}function g(s){return s.map(({webformatURL:r,largeImageURL:a,tags:l,likes:e,views:t,comments:i,downloads:n})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${r}" alt="${l}" />
        </a>
        <div class="gallery-info">
          <ul class="gallery-details">
            ${h(e,t,i,n)}
          </ul>
        </div>
      </li>
    `).join("")}function h(s,r,a,l){return`
    <li class="detail-item">
      <h3 class="detail-label">Likes</h3>
      <p class="detail-value">${s}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Views</h3>
      <p class="detail-value">${r}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Comments</h3>
      <p class="detail-value">${a}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Downloads</h3>
      <p class="detail-value">${l}</p>
    </li>
  `}const p=document.querySelector(".form"),o=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new m(".gallery a",{});p.addEventListener("submit",b);function b(s){s.preventDefault();const r=s.currentTarget[0].value.trim();r&&(o.innerHTML="",c.style.display="block",d(r).then(a=>f(a,o,y)).catch(a=>{console.error("Error fetching images:",a)}).finally(()=>{c.style.display="none"}))}
//# sourceMappingURL=commonHelpers.js.map
