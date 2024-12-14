/**
   Kanbanboard project:
   -------------------
   1. create a modal and show that modal.
   2. on a close of modal, it has to hide.
   3. create the ticket after enter the text inside the textarea of modal
 */

   let addModalState = true;
   let modalPriorityColor = "red";
   
   // helpers function
   const query = (selector) => document.querySelector(selector);
   const queryAll = (selector) => document.querySelectorAll(selector);
   
   const handlePriorityColorClick = (event) => {
     const priorityColorElem = event.target;
   
     queryAll(".priority-color").forEach((priorityColorElem) => {
       priorityColorElem.classList.remove("active");
     });
   
     priorityColorElem.classList.add("active");
   
     console.log(priorityColorElem.classList);
     modalPriorityColor = priorityColorElem.classList[1];
     console.log(modalPriorityColor);
   };
   
   const createTicketElement = (id, task, modalPriorityColor) => {
     const ticketCont = document.createElement("div");
     ticketCont.className = "ticket-cont";
   
     ticketCont.innerHTML = `
           <div class="ticket-color ${modalPriorityColor}"></div>
               <div class="ticket-id">${id}</div>
               <div class="ticket-task">${task}</div>
               <div class="lock-unlock">
                   <i class="fa-solid fa-lock"></i>
               </div>
           </div>
     `;
   
     return ticketCont;
   };
   
   const createTaskHandler = () => {
     const textArea = query(".modal-textarea");
   
     const task = textArea.value.trim();
   
     if (task) {
       const id = new ShortUniqueId().randomUUID();
       const ticketCont = createTicketElement(id, task, modalPriorityColor);
       console.log(ticketCont);
       query("#todo").appendChild(ticketCont);
       closeModal();
       textArea.value = "";
     }
   };
   
   const toggleModal = () => {
     const modal = query(".modal-overlay");
   
     console.log(modal);
   
     modal.style.display = addModalState ? "flex" : "none";
   
     addModalState = !addModalState;
   };
   
   const closeModal = () => {
     toggleModal();
   };
   
   const setupEventListeners = () => {
     query(".toolbox-cont").addEventListener("click", (event) => {
       const targetClassList = event.target.classList;
   
       if (targetClassList.contains("fa-plus")) {
         toggleModal();
       }
     });
   
     query(".modal-close-btn").addEventListener("click", () => {
       closeModal();
     });
   
     query(".create-task").addEventListener("click", createTaskHandler);
   
     queryAll(".priority-color").forEach((priorityColorElem) => {
       priorityColorElem.addEventListener("click", handlePriorityColorClick);
     });
   };
   
   const initKanbanBoard = () => {
     console.log("kanban intialised");
     setupEventListeners();
   };
   
   initKanbanBoard();