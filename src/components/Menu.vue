<template>
<div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a
        ><button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <!-- MENU DE NAVEGACION -->
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <router-link to="/">portada</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <router-link to="/sobremi">sobre mí</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
              <router-link to="/contacto">contacto</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
              <router-link to="/ultimopost/1">último post</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</div>
  
</template>

<script>
export default {
    name: 'Menu',
}
</script>

