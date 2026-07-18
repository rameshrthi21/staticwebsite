const DETAILS = {
  hub:{id:"COMPONENT / HUB",title:"Connectivity hub",
    body:"The shared network core: hub-spoke topology with centralized firewalling, private DNS, and ExpressRoute back to on-premises sites. Every landing zone peers here — one control point for all north–south and east–west traffic.",
    list:["Hub-spoke over vWAN — a deliberate trade-off","Centralized egress & inspection","Private endpoints by default"],
    edges:["e-down","e-up","e-mob","e-corp","e-identity","e-mgmt"]},
  identity:{id:"COMPONENT / IDENTITY",title:"Identity & access",
    body:"Entra ID as the single identity plane. Role assignments follow a least-privilege model, with Privileged Identity Management for anything that touches the platform itself.",
    list:["Custom RBAC roles per persona","PIM for elevated access","No standing owner rights"],
    edges:["e-identity"]},
  mgmt:{id:"COMPONENT / GOVERNANCE",title:"Governance & operations",
    body:"Azure Policy layered across the management group hierarchy: strict at the platform, flexible in the landing zones. Central monitoring and cost visibility close the loop.",
    list:["Policy as code, versioned in Git","Cost allocation via enforced tagging","Central log analytics workspace"],
    edges:["e-mgmt"]},
  down:{id:"LANDING ZONE / DOWNSTREAM",title:"Downstream landing zone",
    body:"A dedicated, policy-wrapped environment for downstream workloads — refining, trading, retail systems. Teams deploy freely inside guardrails the platform enforces.",
    list:["Dedicated subscriptions per workload tier","Peered spoke to the hub","Inherits governance automatically"],
    edges:["e-down"]},
  up:{id:"LANDING ZONE / UPSTREAM",title:"Upstream landing zone",
    body:"Environments tuned for upstream workloads — exploration data, subsurface analytics, operational systems — with stricter data-handling policies where needed.",
    list:["Data-sensitive policy overlay","High-throughput network paths","Same vending pipeline as every LZ"],
    edges:["e-up"]},
  mob:{id:"LANDING ZONE / MOBILITY",title:"Mobility landing zone",
    body:"Fast-moving customer-facing workloads live here — EV charging, loyalty, retail apps — with room for modern PaaS patterns inside the same guardrail set.",
    list:["PaaS-first reference patterns","Public endpoints via WAF only","Rapid subscription vending"],
    edges:["e-mob"]},
  corp:{id:"LANDING ZONE / CORP",title:"Corporate landing zone",
    body:"Shared corporate IT workloads with traditional connectivity needs — line-of-business apps, integration platforms, internal services.",
    list:["Hybrid-first connectivity","Legacy migration patterns","Standardized backup & DR"],
    edges:["e-corp"]},
  vending:{id:"CAPABILITY / VENDING",title:"Subscription vending",
    body:"The platform's front door. A business unit requests an environment; the pipeline delivers a fully wired subscription — network, identity, policy, budget — in hours, not weeks.",
    list:["Terraform-driven, fully automated","Guardrails present on day zero","Self-service via a simple request flow"],
    edges:["e-down","e-up","e-mob","e-corp"]}
};

const nodes=document.querySelectorAll(".node");
const dId=document.getElementById("d-id"),dTitle=document.getElementById("d-title"),
      dBody=document.getElementById("d-body"),dList=document.getElementById("d-list");

function select(key){
  const d=DETAILS[key]; if(!d) return;
  nodes.forEach(n=>n.classList.toggle("active",n.dataset.k===key));
  document.querySelectorAll(".edge").forEach(e=>e.classList.remove("hot"));
  d.edges.forEach(id=>{const e=document.getElementById(id); if(e) e.classList.add("hot");});
  dId.textContent=d.id; dTitle.textContent=d.title; dBody.textContent=d.body;
  dList.innerHTML=d.list.map(x=>`<li>${x}</li>`).join("");
}
nodes.forEach(n=>{
  n.addEventListener("click",()=>select(n.dataset.k));
  n.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();select(n.dataset.k);}});
});
select("hub");
