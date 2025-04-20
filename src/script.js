document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tabs .tab-list-btn")
    const tabContent = document.querySelectorAll(".tabs .tab-content")

    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
            buttons.forEach(item => item.classList.remove("active"))
            this.classList.add("active")

            tabContent.forEach(item => item.classList.remove("active"))

            const tabCollection = this.getAttribute('data-tab');
            document.getElementById(`tab-content-${tabCollection}`).classList.add("active")
        })
    })
})