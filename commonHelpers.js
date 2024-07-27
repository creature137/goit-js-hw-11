import{i as u,S as d}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function f(s){const t="45115917-7726aefcae109b05971acac93",l=`https://pixabay.com/api?${new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(l).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()})}function m(s,t,a){const l=s.hits;if(l.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",progressBarColor:"#b51b1b"});return}const e=l.slice(0,9);t.innerHTML=h(e),a.refresh()}function h(s){return s.map(({webformatURL:t,largeImageURL:a,tags:l,likes:e,views:r,comments:i,downloads:n})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${t}" alt="${l}" />
        </a>
        <div class="gallery-info">
          <ul class="gallery-details">
            ${g(e,r,i,n)}
          </ul>
        </div>
      </li>
    `).join("")}function g(s,t,a,l){return`
    <li class="detail-item">
      <h3 class="detail-label">Likes</h3>
      <p class="detail-value">${s}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Views</h3>
      <p class="detail-value">${t}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Comments</h3>
      <p class="detail-value">${a}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Downloads</h3>
      <p class="detail-value">${l}</p>
    </li>
  `}const p=document.querySelector(".form"),o=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new d(".gallery a",{});p.addEventListener("submit",b);function b(s){s.preventDefault();const t=s.currentTarget[0].value.trim();t&&(o.innerHTML="",c.style.display="block",f(t).then(a=>m(a,o,y)).catch(a=>{console.error("Error fetching images:",a)}).finally(()=>{c.style.display="none"}))}
//# sourceMappingURL=commonHelpers.js.map
