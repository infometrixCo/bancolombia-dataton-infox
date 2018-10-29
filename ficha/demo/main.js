$(window).load(function () {
  $('body .anychart-credits').hide();
  localStorage.getItem('ingreso') ?
    ($('.bg_help').removeClass('open'), $('.bg_help').hide()) :
    (setTimeout(function () {
      $('.bg_help').addClass('open')
    }, 3e3), localStorage.setItem('ingreso', 1))
    , $('body').on('click', '.icon_h, .bg_help .close_h, .icon_h, .bg_help a', function (a) {
      a.preventDefault(), $('.bg_help').removeClass('open')
    }), $('.load_info').fadeOut(300), $('.counter').counterUp({ delay: 10, time: 1e3 })
}), $(document).ready(function () {
  $('body').on('click', '.iconNav',
    function () {
      $(this).hasClass('open') ?
        $('.iconNav, .page-sidebar, .over_nav').removeClass('open') :
        $('.iconNav, .page-sidebar, .over_nav').addClass('open')
    }),
    $('body').on('click', '.over_nav, .page-sidebar .close', function (a) {
      a.preventDefault(), $('.iconNav, .page-sidebar, .over_nav').removeClass('open')
    }), $('body').on('click', '.clic-filter', function (a) {
      a.preventDefault(), $('.bgFilterDahs').addClass('open')
    }), $('body').on('click', '.bgFilterDahs .close, .bgFilterDahs .btnb', function (a) {
      a.preventDefault(), $('.bgFilterDahs').removeClass('open')
    }), $('body').on('click', '.filterUser', function (a) {
      a.preventDefault(), $('.result_user_query').removeClass('blur_content'), $('body,html').animate({ scrollTop: $($('.result_user_query')).offset().top - 105 }, 350)
    }), wow = new WOW({ animateClass: 'animated', offset: 0 }), wow.init(), $(function () {
      $('.tooltipInfo').tooltip()
    }), $('.tableInfometrix').DataTable({
      language: {
        sProcessing: 'Procesando...',
        sLengthMenu: 'Mostrar _MENU_ registros',
        sZeroRecords: 'No se encontraron resultados',
        sEmptyTable: 'Ning\xFAn dato disponible en esta tabla',
        sInfo: 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
        sInfoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
        sInfoFiltered: '(filtrado de un total de _MAX_ registros)',
        sInfoPostFix: '',
        sSearch: 'Buscar:',
        sUrl: '',
        sInfoThousands: ',',
        sLoadingRecords: 'Cargando...',
        oPaginate: {
          sFirst: 'Primero',
          sLast: '\xDAltimo',
          sNext: 'Siguiente',
          sPrevious: 'Anterior'
        },
        oAria: {
          sSortAscending: ': Activar para ordenar la columna de manera ascendente',
          sSortDescending: ': Activar para ordenar la columna de manera descendente'
        }
      }
    }),
    Dropzone.options.DropFilesNews = { url: this.$localeation, paramName: 'file', clickable: !0, maxFilesize: 10, uploadMultiple: !0, maxFiles: 3, addRemoveLinks: !0, acceptedFiles: '.xlsx,.pdf,.xml,.docx', dictDefaultMessage: 'Clic para cargar archivos...', init: function () { this.on('sending', function () { }), this.on('success', function () { }), this.on('addedfile', function () { formData.append('token', TokenHandler.getToken()) }) } }, $('body').on('click', '#DropFilesNews h3', function (a) { a.preventDefault(), $('#DropFilesNews').click() }), $('.chartHV').easyPieChart(
      {
        barColor: '#2188da',
        trackColor: 'rgba(21, 76, 136, 0.04)',
        scaleColor: 'transparent',
        lineCap: 'round',
        lineWidth: 8,
        size: 105,
        animate: 1e3,
        onStart: $.noop,
        onStop: $.noop
      })
});
