$(document).ready(() => {
  // PREVENT BOOTSTRAP MODAL FROM CLOSING ON CLICKING OUTSIDE
  $(".show-modal").click(function () {
    $("#tag-writer").modal({
      backdrop: "static",

      keyboard: false,
    });
  });

  const InitPlugins = {
    navbar: $("#navbar").length > 0 ? $("#navbar") : false,
    showPasswordBtn:
      $(".show-password").length > 0 ? $(".show-password") : false,
    ckEditor: $("#ckinput").length > 0 ? $("#ckinput") : false,
    dataTable: $(".data-table").length > 0 ? $(".data-table") : false,

    dataTableFun: () => {
      // DataTable
      if (InitPlugins.dataTable) {
        // $(InitPlugins.dataTable).each((ind, val) => {
        //   $(val).DataTable();
        // });
        InitPlugins.dataTable.DataTable();
      }
    },

    ckEditorFun: () => {
      // CkEditor 5
      if (InitPlugins.ckEditor) {
        // CKEDITOR.replace("ckinput"); Ck4
        ClassicEditor.create(document.querySelector("#ckinput"), {
          // removePlugins: ['Heading', 'Link'],
          toolbar: [
            "Heading",
            "Bold",
            "Italic",
            "BlockQuote",
            "Indent",
            "ImageUpload",
            // "Link",
            // "CKFinder",
          ],
        }).catch((error) => {
          console.log("Unable to start Ckeditor 5", error);
        });
      }
    },

    togglePasswordFun: () => {
      if (InitPlugins.showPasswordBtn) {
        let btn = InitPlugins.showPasswordBtn;
        let icon = "";
        let input = "";

        btn.click((e) => {
          icon = $(e.currentTarget).find(".icon");
          input = $(e.currentTarget).prev();

          icon.toggleClass("ion-ios-eye-off");

          if (input.attr("type") === "password") {
            input.attr("type", "text");
          } else if (input.attr("type") === "text") {
            input.attr("type", "password");
          }
        });
      }
    },

    toggleHeaderOnscroll: () => {
      if (InitPlugins.navbar) {
        let prevScrollPos = $(window).scrollTop();

        let navbar = InitPlugins.navbar;

        $(window).scroll((e) => {
          let newScrollPos = $(e.currentTarget).scrollTop();

          if (newScrollPos > prevScrollPos) {
            $(navbar).css({ top: "-100%" });
          } else if (newScrollPos <= prevScrollPos) {
            $(navbar).css({ top: "0%" });
          }

          prevScrollPos = newScrollPos;
        });
      }
    },
  };

  InitPlugins.toggleHeaderOnscroll();
  InitPlugins.togglePasswordFun();
  InitPlugins.ckEditorFun();
  // InitPlugins.dataTableFun();
});

// console.log(ClassicEditor.builtinPlugins.map((plugin) => plugin.pluginName));
