'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gm-frvt documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-db767ecdb171ecc5b072e586e6279f6af71ef28010192329cb3cbaecab3dac55616b5fb0b2c34d51163e662d4b6a71f96969ab1d8c1bf3818476a65daf5ab4ab"' : 'data-bs-target="#xs-components-links-module-AppModule-db767ecdb171ecc5b072e586e6279f6af71ef28010192329cb3cbaecab3dac55616b5fb0b2c34d51163e662d4b6a71f96969ab1d8c1bf3818476a65daf5ab4ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-db767ecdb171ecc5b072e586e6279f6af71ef28010192329cb3cbaecab3dac55616b5fb0b2c34d51163e662d4b6a71f96969ab1d8c1bf3818476a65daf5ab4ab"' :
                                            'id="xs-components-links-module-AppModule-db767ecdb171ecc5b072e586e6279f6af71ef28010192329cb3cbaecab3dac55616b5fb0b2c34d51163e662d4b6a71f96969ab1d8c1bf3818476a65daf5ab4ab"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/inicioAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >inicioAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/inicioOperarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >inicioOperarioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link" >FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FooterModule-86a9b08d91a45c8a86f399d017d2232c706a25283576caea37c0c01dc1b9c2af1efeee874e25e5c3ef492f58f84935ec34dcdb7e6524e1be9626092c24ab7746"' : 'data-bs-target="#xs-components-links-module-FooterModule-86a9b08d91a45c8a86f399d017d2232c706a25283576caea37c0c01dc1b9c2af1efeee874e25e5c3ef492f58f84935ec34dcdb7e6524e1be9626092c24ab7746"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-86a9b08d91a45c8a86f399d017d2232c706a25283576caea37c0c01dc1b9c2af1efeee874e25e5c3ef492f58f84935ec34dcdb7e6524e1be9626092c24ab7746"' :
                                            'id="xs-components-links-module-FooterModule-86a9b08d91a45c8a86f399d017d2232c706a25283576caea37c0c01dc1b9c2af1efeee874e25e5c3ef492f58f84935ec34dcdb7e6524e1be9626092c24ab7746"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterLogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterLogoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormulariosModule.html" data-type="entity-link" >FormulariosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FormulariosModule-06842f7ae1ad6d5fcafb979061241a1892ebf9256ec13460660c8ee7bf0fbddef3df152995e1885788ccf0e1f217ae40b820a4de6cf25e233c732fa452f197f6"' : 'data-bs-target="#xs-components-links-module-FormulariosModule-06842f7ae1ad6d5fcafb979061241a1892ebf9256ec13460660c8ee7bf0fbddef3df152995e1885788ccf0e1f217ae40b820a4de6cf25e233c732fa452f197f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormulariosModule-06842f7ae1ad6d5fcafb979061241a1892ebf9256ec13460660c8ee7bf0fbddef3df152995e1885788ccf0e1f217ae40b820a4de6cf25e233c732fa452f197f6"' :
                                            'id="xs-components-links-module-FormulariosModule-06842f7ae1ad6d5fcafb979061241a1892ebf9256ec13460660c8ee7bf0fbddef3df152995e1885788ccf0e1f217ae40b820a4de6cf25e233c732fa452f197f6"' }>
                                            <li class="link">
                                                <a href="components/FormActivoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormActivoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormEdificioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormEdificioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormLaborComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormLaborComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormOtComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormOtComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormPisoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormPisoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormTareasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormTareasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUbicacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUbicacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUsuariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUsuariosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderLoggedModule.html" data-type="entity-link" >HeaderLoggedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HeaderLoggedModule-7fc7a202b8002e7bef731a24bfbc751a4f1ea17858b5ff544a9849a0eacb7253775ef7ee8d4204e2011fcd442f5e4fdad0e7a45f8af93874df509a4f0e0eebcd"' : 'data-bs-target="#xs-components-links-module-HeaderLoggedModule-7fc7a202b8002e7bef731a24bfbc751a4f1ea17858b5ff544a9849a0eacb7253775ef7ee8d4204e2011fcd442f5e4fdad0e7a45f8af93874df509a4f0e0eebcd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderLoggedModule-7fc7a202b8002e7bef731a24bfbc751a4f1ea17858b5ff544a9849a0eacb7253775ef7ee8d4204e2011fcd442f5e4fdad0e7a45f8af93874df509a4f0e0eebcd"' :
                                            'id="xs-components-links-module-HeaderLoggedModule-7fc7a202b8002e7bef731a24bfbc751a4f1ea17858b5ff544a9849a0eacb7253775ef7ee8d4204e2011fcd442f5e4fdad0e7a45f8af93874df509a4f0e0eebcd"' }>
                                            <li class="link">
                                                <a href="components/BuscadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HeaderModule-a6fb99db6fb90a0ec6617ae61d209c04fd424a3f5aa042196ba151eb9b4773d95d45089c26c23b4e7e3f297aa2df506234d59ffa71678b9cfb908f86f2cd7e1e"' : 'data-bs-target="#xs-components-links-module-HeaderModule-a6fb99db6fb90a0ec6617ae61d209c04fd424a3f5aa042196ba151eb9b4773d95d45089c26c23b4e7e3f297aa2df506234d59ffa71678b9cfb908f86f2cd7e1e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-a6fb99db6fb90a0ec6617ae61d209c04fd424a3f5aa042196ba151eb9b4773d95d45089c26c23b4e7e3f297aa2df506234d59ffa71678b9cfb908f86f2cd7e1e"' :
                                            'id="xs-components-links-module-HeaderModule-a6fb99db6fb90a0ec6617ae61d209c04fd424a3f5aa042196ba151eb9b4773d95d45089c26c23b4e7e3f297aa2df506234d59ffa71678b9cfb908f86f2cd7e1e"' }>
                                            <li class="link">
                                                <a href="components/LogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavegacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavegacionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandingModule.html" data-type="entity-link" >LandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LandingModule-e8b279e6e6212dfeaadf5fdd939ca185e6ca4591ca409619447fa118afac2b8e016fd24450c35cb3c7a468acb4dc1b7a2bb0b5fc43a1574bdd78b15d40834e6c"' : 'data-bs-target="#xs-components-links-module-LandingModule-e8b279e6e6212dfeaadf5fdd939ca185e6ca4591ca409619447fa118afac2b8e016fd24450c35cb3c7a468acb4dc1b7a2bb0b5fc43a1574bdd78b15d40834e6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingModule-e8b279e6e6212dfeaadf5fdd939ca185e6ca4591ca409619447fa118afac2b8e016fd24450c35cb3c7a468acb4dc1b7a2bb0b5fc43a1574bdd78b15d40834e6c"' :
                                            'id="xs-components-links-module-LandingModule-e8b279e6e6212dfeaadf5fdd939ca185e6ca4591ca409619447fa118afac2b8e016fd24450c35cb3c7a468acb4dc1b7a2bb0b5fc43a1574bdd78b15d40834e6c"' }>
                                            <li class="link">
                                                <a href="components/LandingInfo1Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingInfo1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingInfo2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingInfo2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingInfo3Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingInfo3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingInfo4Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingInfo4Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdenTrabajoModule.html" data-type="entity-link" >OrdenTrabajoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OrdenTrabajoModule-a9615fda192ce15a310c39538dc5cfc0b9e28166bfb562fefb68cd4456c67a9114619fe6e5b5b6081ee5abb0487d283275fad46bd0a48cdccc55945e35168d49"' : 'data-bs-target="#xs-components-links-module-OrdenTrabajoModule-a9615fda192ce15a310c39538dc5cfc0b9e28166bfb562fefb68cd4456c67a9114619fe6e5b5b6081ee5abb0487d283275fad46bd0a48cdccc55945e35168d49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdenTrabajoModule-a9615fda192ce15a310c39538dc5cfc0b9e28166bfb562fefb68cd4456c67a9114619fe6e5b5b6081ee5abb0487d283275fad46bd0a48cdccc55945e35168d49"' :
                                            'id="xs-components-links-module-OrdenTrabajoModule-a9615fda192ce15a310c39538dc5cfc0b9e28166bfb562fefb68cd4456c67a9114619fe6e5b5b6081ee5abb0487d283275fad46bd0a48cdccc55945e35168d49"' }>
                                            <li class="link">
                                                <a href="components/CuerpoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CuerpoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FechasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FechasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectoresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TareasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TareasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/PendientesComponent.html" data-type="entity-link" >PendientesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TerminadasComponent.html" data-type="entity-link" >TerminadasComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivoService.html" data-type="entity-link" >ActivoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActivoTareaService.html" data-type="entity-link" >ActivoTareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodigoService.html" data-type="entity-link" >CodigoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EdificioService.html" data-type="entity-link" >EdificioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FiltrosService.html" data-type="entity-link" >FiltrosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LaborService.html" data-type="entity-link" >LaborService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OtService.html" data-type="entity-link" >OtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PisoService.html" data-type="entity-link" >PisoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectorService.html" data-type="entity-link" >SectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectionService.html" data-type="entity-link" >SelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TareaService.html" data-type="entity-link" >TareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UbicacionService.html" data-type="entity-link" >UbicacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Activo.html" data-type="entity-link" >Activo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActivoTarea.html" data-type="entity-link" >ActivoTarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CodigoActivo.html" data-type="entity-link" >CodigoActivo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Edificio.html" data-type="entity-link" >Edificio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FiltroInterfaz.html" data-type="entity-link" >FiltroInterfaz</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRegister.html" data-type="entity-link" >IRegister</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Labor.html" data-type="entity-link" >Labor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Logeo.html" data-type="entity-link" >Logeo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NumeroOT.html" data-type="entity-link" >NumeroOT</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ot.html" data-type="entity-link" >Ot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Piso.html" data-type="entity-link" >Piso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sector.html" data-type="entity-link" >Sector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tarea.html" data-type="entity-link" >Tarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ubicacion.html" data-type="entity-link" >Ubicacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});