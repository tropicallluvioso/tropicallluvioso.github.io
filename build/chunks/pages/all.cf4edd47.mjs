import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro.3f7a8434.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                             *//* empty css                                */
const $$Astro$9 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es">
<head>

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="https://cdn.glitch.global/65b87995-9e79-4a61-b813-528c4abe6b5e/icono.png?v=1677046781578">

<title>${title}</title>
${renderHead($$result)}</head>
<header>
  <div class="container">
    <div class="row">
      <div class="logo">
      <a href="/">
        <img src="https://cdn.glitch.global/83841118-9de7-4fb7-b314-f02de482edf2/TLL6.png?v=1675952733494" class="logo"></a>
      </div>
      <div class="menu_button">
        <div class="bar"></div>
      </div>
    </div>
  </div>
  <div class="menu_overlay">
    <div class="container center-content">
      <div class="row">
        <ul class="nav">
          <li class="nav_list"><a href="/about" class="nav_link">About</a></li>
          <li class="nav_list">
            <a href="/screenwriting" class="nav_link">Screenwriting</a>
          </li>
          <li class="nav_list"><a href="/production" class="nav_link">Production</a></li>
          <li class="nav_list">
            <a href="/public-broadcast" class="nav_link">Public Broadcast</a>
          </li>
          <li class="nav_list">
            <a href="/strategic-comm" class="nav_link">Strategic Communications</a>
          </li>
          <li class="nav_list">
            <a href="contact" class="nav_link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
<!--div class="after-header-space"></div-->
${renderSlot($$result, $$slots["default"])}

<footer>
  <div>
    <div class="socials">
      <span><a target="_blank" id="instagram" rel="" href="https://www.instagram.com/tropical.lluvioso"><svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7402 0H6.25976C2.80199 0 0 2.80199 0 6.25976V14.7551C0 18.198 2.80199 21.0149 6.25976 21.0149H14.7551C18.198 21.0149 21.0149 18.2129 21.0149 14.7551V6.25976C21 2.80199 18.198 0 14.7402 0ZM18.8836 14.7402C18.8836 17.0355 17.0355 18.8836 14.7402 18.8836H6.25976C3.96451 18.8836 2.11639 17.0355 2.11639 14.7402V6.25976C2.11639 3.96451 3.96451 2.11639 6.25976 2.11639H14.7551C17.0504 2.11639 18.8985 3.96451 18.8985 6.25976L18.8836 14.7402Z"></path>
            <path d="M10.5075 5.06741C7.51171 5.06741 5.06742 7.5117 5.06742 10.5074C5.06742 13.5032 7.51171 15.9326 10.4925 15.9326C13.4734 15.9326 15.9177 13.4883 15.9177 10.5074C15.9177 7.5266 13.5032 5.06741 10.5075 5.06741ZM10.5075 13.8162C8.67424 13.8162 7.18382 12.3258 7.18382 10.4925C7.18382 8.65932 8.67424 7.1689 10.5075 7.1689C12.3407 7.1689 13.8311 8.65932 13.8311 10.4925C13.8162 12.3407 12.3407 13.8162 10.5075 13.8162Z"></path>
            <path d="M15.9475 6.40872C16.6636 6.40872 17.2442 5.82818 17.2442 5.11206C17.2442 4.39593 16.6636 3.81539 15.9475 3.81539C15.2314 3.81539 14.6508 4.39593 14.6508 5.11206C14.6508 5.82818 15.2314 6.40872 15.9475 6.40872Z"></path></svg></a></span>
      <span>
        <a href="">
          <svg fill="#000000" width="22" height="22" version="1.1" id="linkedin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve">
            <g id="" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>
            </g>
          </svg>
        </a>
      </span>
      <span><a href="https://wa.me/50685675500">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g stroke-width="0"></g>
            <g id="" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <rect x="0" fill="none" width="20" height="20"></rect>
              <g>
                <path d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2 2 5.5.8 10.5 3.2 14.2l.2.3-.8 3 3-.8.3.2c1.3.7 2.7 1.1 4.1 1.1 1.5 0 3-.4 4.3-1.2 3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1-.4 0-.9.2-2.9-.6-1.7-.8-3.1-2.1-4.1-3.6-.6-.7-.9-1.6-1-2.5 0-.8.3-1.5.8-2 .2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4.1.2 0 .4-.1.5-.1.1-.2.3-.3.4-.2.1-.3.3-.2.5.4.6.9 1.2 1.4 1.7.6.5 1.2.9 1.9 1.2.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3.1.3.1.7-.1 1z"></path>
              </g>
            </g>
          </svg> </a></span>
      <span>
        <a id="email" href="">
          <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
            </g>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>


</html>`;
}, "/app/src/layouts/MainLayout.astro");

const socials = {
	instagram: "https://instagram.com/tropical.lluvioso"
};
const es = {
	home: {
		title: "Portfolio",
		text: "español",
		stills: [
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "dd18d4bb-0edf-4565-889b-c577113d8c92",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "456daa4e-ceb2-454e-bf3b-c6f817b8fa40",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "202504f1-df80-4711-8402-bec3ce7196df",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "8d1214a5-a392-4d48-b3f7-239f0e9ef7a6",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "9db76b35-ed11-4629-b673-f575a155f5c4",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "fd30e62e-004a-4d67-9130-f66c11665d76",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "2ecf04f9-678f-4f9e-83e9-6b347e19c2a9",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "a48b32bf-68d0-4c16-afef-c73266a0df5a",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "58b72cb0-ad9b-484c-b654-94dc59ae0686",
					height: 1476,
					width: 2880
				}
			}
		]
	},
	about: {
		title: "Nosotrxs",
		text: "<strong>Tropical Lluvioso </strong>es un estudio de producción trans-caribeño que acompaña la gestación de relatos cinematográficos, institucionales y públicos. Hacemos películas que desafían las fronteras desde su periferia, abrazando la fluidez del género cinematográfico y negando los binarios de la ficción y el documental. Maquinamos historias con sus gestoras desde su escritura [Soberane (2022, Cuba, premio mejor cortometraje Locarno Film Festival) y Ánima (2022, Cuba, premio mejor cortometraje latinoamericano en el Festival Internacional de Cine de Mar del Plata)] y acompañándolas en su producción [Sotavento (2021, Venezuela, premio mejor cortometraje mercosureño BAFICI), Mulheres Árvore (2022, Brasil, selección oficial Rio Film Festival) y Nara (2021, Cuba, selección oficial Festival Internacional del Nuevo Cine Latinoamericano)]. Gestamos audiovisuales de interés y acceso público, como ¡Suave un Toque! (2017, Costa Rica, Premio Nuevas Miradas en la Televisión) y acompañamos la comunicación estratégica de organizaciones públicas costarricenses como la Universidad de Costa Rica y organismos internacionales como la Comisión Interamericana de Derechos Humanos. Trabajamos en los territorios ancestrales y usurpados de los pueblos de Abya Yala, incluyendo los territorios de los pueblos Bribri, Cabécar, Ngäbe-Buglé, Brunca, Brörán, Chorotega, Maleku y Huetar."
	},
	strategic_comm: {
		title: "Comunicación Estratégica",
		stills: [
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "dd18d4bb-0edf-4565-889b-c577113d8c92",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "456daa4e-ceb2-454e-bf3b-c6f817b8fa40",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "202504f1-df80-4711-8402-bec3ce7196df",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "8d1214a5-a392-4d48-b3f7-239f0e9ef7a6",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "9db76b35-ed11-4629-b673-f575a155f5c4",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "fd30e62e-004a-4d67-9130-f66c11665d76",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "2ecf04f9-678f-4f9e-83e9-6b347e19c2a9",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "a48b32bf-68d0-4c16-afef-c73266a0df5a",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "58b72cb0-ad9b-484c-b654-94dc59ae0686",
					height: 1476,
					width: 2880
				}
			}
		],
		text: "Lorem ipsum chamancatualitou"
	}
};
const en = {
	home: {
		text: "inglés",
		title: "Portafolio",
		stills: [
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "dd18d4bb-0edf-4565-889b-c577113d8c92",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "456daa4e-ceb2-454e-bf3b-c6f817b8fa40",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "202504f1-df80-4711-8402-bec3ce7196df",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "8d1214a5-a392-4d48-b3f7-239f0e9ef7a6",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "9db76b35-ed11-4629-b673-f575a155f5c4",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "fd30e62e-004a-4d67-9130-f66c11665d76",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "2ecf04f9-678f-4f9e-83e9-6b347e19c2a9",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "a48b32bf-68d0-4c16-afef-c73266a0df5a",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "58b72cb0-ad9b-484c-b654-94dc59ae0686",
					height: 1476,
					width: 2880
				}
			}
		]
	},
	about: {
		title: "About",
		text: "Tropical Lluvioso is a trans-Caribbean production studio that accompanies the gestation of cinematographic, institutional and public stories. We make films that defy borders from their periphery, embracing the fluidity of the film genre and denying the binaries of fiction and documentary. We fabricate stories with their managers from their writing [Soberane (2022, Cuba, Locarno Film Festival best short film award) and Ánima (2022, Cuba, best Latin American short film award at the Mar del Plata International Film Festival)] and accompanying them in their production [Sotavento (2021, Venezuela, BAFICI Best Mercosuran Short Film Award), Mulheres Árvore (2022, Brazil, Rio Film Festival official selection) and Nara (2021, Cuba, International Festival of New Latin American Cinema official selection)].  We create audiovisuals of interest and public access, such as ¡Suave un Toque! (2017, Costa Rica, Nuevas Miradas en la Televisión Award) and we accompany the strategic communication of Costa Rican public organizations such as the University of Costa Rica and international organizations such as the Inter-American Commission on Human Rights. We work in the ancestral and usurped territories of the Abya Yala peoples, including the territories of the Bribri, Cabécar, Ngäbe-Buglé, Brunca, Brörán, Chorotega, Maleku and Huetar peoples."
	},
	strategic_comm: {
		title: "Strategic Communications",
		stills: [
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "dd18d4bb-0edf-4565-889b-c577113d8c92",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "456daa4e-ceb2-454e-bf3b-c6f817b8fa40",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "202504f1-df80-4711-8402-bec3ce7196df",
					height: 1080,
					width: 1920
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "8d1214a5-a392-4d48-b3f7-239f0e9ef7a6",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "9db76b35-ed11-4629-b673-f575a155f5c4",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "fd30e62e-004a-4d67-9130-f66c11665d76",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "2ecf04f9-678f-4f9e-83e9-6b347e19c2a9",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "a48b32bf-68d0-4c16-afef-c73266a0df5a",
					height: 1600,
					width: 2560
				}
			},
			{
				image: {
					provider: "uploadcare",
					type: "image",
					id: "58b72cb0-ad9b-484c-b654-94dc59ae0686",
					height: 1476,
					width: 2880
				}
			}
		],
		text: "Lorem ipsum chamancatualito"
	}
};
const data = {
	socials: socials,
	es: es,
	en: en
};

const $$Astro$8 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index;
  const stills = data.es.strategic_comm.stills;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Tropical Lluvioso" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="container-slides">
     
      ${stills.map((still) => renderTemplate`<img loading="lazy" class="slide"${addAttribute(`https://ucarecdn.com/${still.image.id}/`, "src")} alt="">`)}
      </div>` })}`;
}, "/app/src/pages/index.astro");

const $$file$8 = "/app/src/pages/index.astro";
const $$url$8 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
async function getStaticPaths$1() {
  const response = await fetch("https://randomuser.me/api/?results=2");
  const data = await response.json();
  const dataRes = data.results;
  console.log(dataRes);
  return dataRes.map(({ gender, email }) => {
    var pb = gender;
    return {
      params: { pb },
      props: { email }
    };
  });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$$1;
  const { pb } = Astro2.params;
  const { email } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="after-header-space"></div><div class="center-self">
<div class="tabordion">

  <figure id="section1">
    <input type="radio" name="sections" id="option1" checked>
    <label for="option1">Galería</label>
    <article>
      <h2>Galería</h2>
      <p>${pb}</p>
    </article>
    </figure>
    <figure id="section2">
      <input type="radio" name="sections" id="option2" checked>
      <label for="option2">Ficha</label>
      <article>
        <h2>Ficha</h2>
        <p>${pb} ficha</p>
      </article>
    </figure>
    <figure id="section3">
      <input type="radio" name="sections" id="option3" checked>
      <label for="option3">Sinopsis</label>
      <article>
        <h2>Sinopsis</h2>
        <p>${email} sinopsis</p>
      </article>
    </figure>
</div></div>` })}`;
}, "/app/src/pages/public-broadcast/[...id].astro");

const $$file$7 = "/app/src/pages/public-broadcast/[...id].astro";
const $$url$7 = "/public-broadcast/[...id]";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$7,
  getStaticPaths: getStaticPaths$1,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$PublicBroadcast = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PublicBroadcast;
  const response = await fetch("https://raw.githubusercontent.com/smosgasbord/fedePortfolio/main/db.json");
  const data = await response.json();
  console.log(data);
  const projects = data.es.public_broadcasting;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Public Broadcasting - Tropical Lluvioso" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="after-header-space"></div><h1 class="center-content">Public Broadcasting</h1><div class="cardContainer">
${projects.map(
    (project) => renderTemplate`<figure class="card"><img loading="lazy"${addAttribute(`https://ucarecdn.com/${project.galeria[0].image.id}/`, "src")}>
    <figcaption>
      <h3>${project.tituloProyecto}</h3>
      <p class="content"> ${project.sinopsis}</p>
      <a class="content btn center-content"${addAttribute(`/public-broadcasting/${project.id}`, "href")}>Leer Más</a>

    </figcaption>

  </figure>`
  )}
  </div>` })}`;
}, "/app/src/pages/public-broadcast.astro");

const $$file$6 = "/app/src/pages/public-broadcast.astro";
const $$url$6 = "/public-broadcast";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PublicBroadcast,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$StrategicComm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$StrategicComm;
  const stills = data.es.strategic_comm.stills;
  const text = data.es.strategic_comm.text;
  console.log(text);
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Tropical Lluvioso  " }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="container-slides">
     
      ${stills.map((still) => renderTemplate`<img loading="lazy" class="slide"${addAttribute(`https://ucarecdn.com/${still.image.id}/-/format/webp/`, "src")} alt="">`)}
      </div><p class="pb-data">${text}</p>` })}`;
}, "/app/src/pages/strategic-comm.astro");

const $$file$5 = "/app/src/pages/strategic-comm.astro";
const $$url$5 = "/strategic-comm";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StrategicComm,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Screenwriting = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Screenwriting;
  const response = await fetch("https://raw.githubusercontent.com/smosgasbord/fedePortfolio/main/db.json");
  const data = await response.json();
  const projects = data.es.screenwriting;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Screenwriting - Tropical Lluvioso" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="after-header-space"></div><h1 class="center-content">Screenwriting</h1><div class="cardContainer">
${projects.map(
    (project) => renderTemplate`<figure class="card"><img loading="lazy"${addAttribute(`https://ucarecdn.com/${project.galeria[0].image.id}/-/format/webp/`, "src")}>
    <figcaption>
      <h3>${project.tituloProyecto}</h3>
      <p class="content"> ${project.sinopsis}</p>
      <a class="content btn center-content"${addAttribute(void 0, "href")}>Ver Más</a>

    </figcaption>

  </figure>`
  )}
  </div>` })}`;
}, "/app/src/pages/screenwriting.astro");

const $$file$4 = "/app/src/pages/screenwriting.astro";
const $$url$4 = "/screenwriting";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Screenwriting,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
async function getStaticPaths() {
  const response = await fetch("https://raw.githubusercontent.com/smosgasbord/fedePortfolio/main/db.json");
  const data = await response.json();
  const projects = data.es.production;
  console.log(projects);
  return projects.map(({ id, ficha, sinopsis, galeria, tituloProyecto }) => {
    return {
      params: { id },
      props: { id, ficha, sinopsis, galeria, tituloProyecto }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$;
  Astro2.params;
  const { ficha, sinopsis, galeria, tituloProyecto } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="after-header-space"></div><h1 class="center-content">${tituloProyecto}</h1><div class="center-self">
<div class="tabordion">

  <figure id="section1">
  
    <input type="radio" name="sections" id="option1" checked>
    <label for="option1"> Galería</label>
    <article>
    <h2>Galeria</h2>
    <div class="galeria-slides">
     ${galeria.map((image) => renderTemplate`<img loading="lazy" class="slide"${addAttribute(`https://ucarecdn.com/${image.image.id}/`, "src")} alt="">`)}</div>
    </article>
    </figure>
    
    <figure id="section2">
      <input type="radio" name="sections" id="option2" checked>
      <label for="option2">Ficha</label>
      <article>
        <h2>Ficha</h2>
        <p>${ficha}</p>
      </article>
    </figure>
    <figure id="section3">
      <input type="radio" name="sections" id="option3" checked>
      <label for="option3">Sinopsis</label>
      <article>
        <h2>Sinopsis</h2>
        <p>${sinopsis}</p>
      </article>
    </figure>
</div></div>` })}`;
}, "/app/src/pages/production/[...id].astro");

const $$file$3 = "/app/src/pages/production/[...id].astro";
const $$url$3 = "/production/[...id]";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$3,
  getStaticPaths,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Production = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Production;
  const response = await fetch("https://raw.githubusercontent.com/smosgasbord/fedePortfolio/main/db.json");
  const data = await response.json();
  console.log(data);
  const projects = data.es.production;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Production - Tropical Lluvioso" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="after-header-space"></div><h1 class="center-content">Production${projects.title}</h1><div class="cardContainer">
${projects.map(
    (project) => renderTemplate`<figure class="card"><img${addAttribute(`https://ucarecdn.com/${project.galeria[0].image.id}/-/format/webp/`, "src")}>
    <figcaption>
      <h3>${project.tituloProyecto}</h3>
      <p class="content"> ${project.sinopsis}</p>
      <a class="content btn center-content"${addAttribute(`/production/${project.id}`, "href")}>Leer Más</a>

    </figcaption>

  </figure>`
  )}
  </div>` })}`;
}, "/app/src/pages/production.astro");

const $$file$2 = "/app/src/pages/production.astro";
const $$url$2 = "/production";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Production,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  const response = await fetch("https://raw.githubusercontent.com/smosgasbord/fedePortfolio/main/db.json");
  const data = await response.json();
  console.log(data);
  const contact = data.es.contact;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="after-header-space"></div><div class="container center-content pd-small">
  <div class="center">
  <h1 class="pd-small">${contact.title}</h1>
  <div class="container pd-small">${contact.text}
    </div></div>
    <div class="container  pd-small">
  <form target="_blank" class="center" action="https://formsubmit.co/consultas@tropicallluvioso.com" method="POST">
    <div class="form-group">
      <div class="row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
  </div>
</div>` })}`;
}, "/app/src/pages/contact.astro");

const $$file$1 = "/app/src/pages/contact.astro";
const $$url$1 = "/contact";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const aboutText = data.es.about.text;
  console.log(aboutText);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="after-header-space"></div><div class="container center-content">
<h1 class="center-self" class="title">About</h1>
<div class="aboutText">
  <p>
${aboutText}
  </p></div></div>` })}`;
}, "/app/src/pages/about.astro");

const $$file = "/app/src/pages/about.astro";
const $$url = "/about";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h };
