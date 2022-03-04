AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["book-1", "book-2", "book-3", "book-4"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
        const el=document.querySelector("#camera-cursor")
        el.setAttribute("material",{
          color:"green",
          opacity:1
        })
        el.setAttribute("geometry",{
          radiusInner: 0.01,
          radiusOuter: 0.02
        })
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave",() =>{
        const {selectedItemId}=this.data
  
        if(selectedItemId){
          const el=document.querySelector(`#${selectedItemId}`)
          const id=el.getAttribute("id")
  
          if(id==selectedItemId){
            el.setAttribute("material",{
              color:"#0077CC",
              opacity:1
            })
          const cursorEl=document.querySelector(`#camera-cursor`)
        
            cursorEl.setAttribute("material",{
              color:"white",
              opacity:1
            })
            cursorEl.setAttribute("geometry",{
              radiusInner: 0.02,
              radiusOuter: 0.03
            })
          
  
          }
        }
  
      })
  
      
    },
  });
  