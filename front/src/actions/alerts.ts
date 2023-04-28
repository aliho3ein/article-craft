import Swal, { SweetAlertIcon } from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: false,
  timerProgressBar: true,
  position: "bottom-end",
  backdrop: true,
  customClass: {
    popup: "alertMassage",
  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const alertMassage = (
  title: string,
  icon: SweetAlertIcon = "success",
  timer: number = 3000
) => {
  // icons : success , error , warning ,info ,question
  Toast.fire({
    icon,
    title,
    timer,
  });
};
