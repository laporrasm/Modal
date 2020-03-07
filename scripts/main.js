class Modal {
	constructor(element, acceptCallback, cancelCallback) {
		this.element = document.querySelector(element);
		this.cancel = this.element.querySelector(".modal__cancel");
		this.close = this.element.querySelector(".modal__close-icon");
		this.confirm = this.element.querySelector(".modal__confirm");

		this.addEvents(acceptCallback, cancelCallback);
	}

	addEvents(acceptCallback, cancelCallback) {
		this.cancel.addEventListener("click", () => {
			this.closeModal();
			cancelCallback();
		});
		
		this.close.addEventListener("click", () => this.closeModal());

		this.confirm.addEventListener("click", () => {
			this.closeModal();
			acceptCallback();
		})

	}

	closeModal() { this.element.classList.remove("is-active") }

	openModal() { this.element.classList.add("is-active") }

}

let modal1 = new Modal(".modal", function() { console.log("Action Confirmed") }, function() { console.log("Action Cancelled") } );
		
let modalLauncher = document.querySelector(".modal-launcher");
modalLauncher.addEventListener("click", () => modal1.openModal());