<template>
  <base-page-layout>

    <div class="h1 mt-4 fw-bolder">Шрифты и прочее</div>
    <div class="row row-cols-3">
      <div>
        <h1 class="display-1">Display 1</h1>
        <h1 class="display-2">Display 2</h1>
        <h1 class="display-3">Display 3</h1>
        <h1 class="display-4">Display 4</h1>
        <h1 class="display-5">Display 5</h1>
        <h1 class="display-6">Display 6</h1>
      </div>
      <div>
        <h1>h1. Bootstrap heading</h1>
        <h2>h2. Bootstrap heading</h2>
        <h3>h3. Bootstrap heading</h3>
        <h4>h4. Bootstrap heading</h4>
        <h5>h5. Bootstrap heading</h5>
        <h6>h6. Bootstrap heading</h6>
      </div>
      <div>
        <p>You can use the mark tag to
          <mark>highlight</mark>
          text.
        </p>
        <p>
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p>
          <ins>This line of text is meant to be treated as an addition to the document.</ins>
        </p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
      </div>
    </div>

    <div class="h1 mt-4 fw-bolder">Кнопки</div>

    <div class="mt-2">
      <button type="button" class="btn btn-primary me-2">Primary</button>
      <button type="button" class="btn btn-secondary me-2">Secondary</button>
      <button type="button" class="btn btn-success me-2">Success</button>
      <button type="button" class="btn btn-danger me-2">Danger</button>
      <button type="button" class="btn btn-warning me-2">Warning</button>
      <button type="button" class="btn btn-info me-2">Info</button>
      <button type="button" class="btn btn-light me-2">Light</button>
      <button type="button" class="btn btn-dark me-2">Dark</button>
      <button type="button" class="btn btn-link me-2">Link</button>
    </div>

    <div class="mt-2">
      <button type="button" class="btn btn-outline-primary me-2">Primary</button>
      <button type="button" class="btn btn-outline-secondary me-2">Secondary</button>
      <button type="button" class="btn btn-outline-success me-2">Success</button>
      <button type="button" class="btn btn-outline-danger me-2">Danger</button>
      <button type="button" class="btn btn-outline-warning me-2">Warning</button>
      <button type="button" class="btn btn-outline-info me-2">Info</button>
      <button type="button" class="btn btn-outline-light me-2">Light</button>
      <button type="button" class="btn btn-outline-dark me-2">Dark</button>
    </div>


    <div class="h1 mt-4 fw-bolder">Формы</div>

    <div class="row mb-2">
      <div class="col">
        <input-text-component
          name="inputName"
          label="Введите логин"
          placeholder="Ваш логин"
          help="Вспомогательный текст"
        ></input-text-component>
      </div>
      <div class="col">
        <input-text-component
          name="inputName"
          label="Email address (disabled)"
          placeholder="name@example.com"
          :disabled="true"
        ></input-text-component>
      </div>
      <div class="col">
        <input-text-component
          name="inputName"
          label="Email address (readonly)"
          placeholder="name@example.com"
          :readonly="true"
        ></input-text-component>
      </div>
      <div class="col">
        <input-text-component
          name="inputName"
          label="Email address"
          placeholder="name@example.com"
          error="Please enter a message in the input."
        ></input-text-component>
      </div>
    </div>

    <div class="row mb-2">
      <div class="col">
        <textarea-component
          label="Textarea"
          name="textarea"
          placeholder="Required example textarea"
          :required="true"
          help="Вспомогательный текст под полем"
          :resize="false"
        ></textarea-component>
      </div>
      <div class="col">
        <textarea-component
          label="Textarea Disabled"
          name="textarea"
          placeholder="Required example textarea"
          :disabled="true"
        ></textarea-component>
      </div>
      <div class="col">
        <textarea-component
          label="Textarea Readonly"
          name="textarea"
          placeholder="Required example textarea"
          :readonly="true"
        ></textarea-component>
      </div>
      <div class="col">
        <textarea-component
          label="Textarea Readonly"
          name="textarea"
          placeholder="Required example textarea"
          error="Please enter a message in the textarea."
        ></textarea-component>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="mb-3">
          <label for="formFile" class="form-label">Default file input example</label>
          <input class="form-control" type="file" id="formFile">
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">Multiple files input example</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="formFileDisabled" class="form-label">Disabled file input example</label>
          <input class="form-control" type="file" id="formFileDisabled" disabled>
        </div>
      </div>
    </div>
    <div class="h4">Select example</div>
    <div class="row">
      <div class="col">
        <select-component
          name="select1"
          label="Выберите из списка"
          v-model="selectedValue"
          :options="selectOptions"
          help="Текст с пояснением"
        ></select-component>
      </div>
      <div class="col">
        <select-component
          name="select1"
          label="Выберите из списка"
          v-model="selectedValue"
          :options="selectOptions"
          :disabled="true"
        ></select-component>
      </div>
      <div class="col">
        <select-component
          name="select1"
          label="Выберите из списка"
          v-model="selectedValue"
          :default-nothing="true"
          :options="selectOptions"
          error="Выберите значение из списка"
        ></select-component>
      </div>
    </div>

    <div class="mt-4">
      <h3>Checkboxes</h3>

      <div class="row">
        <div class="col">
          <checkbox-component
            name="flexCheckDefault"
            label="Default checkbox"
          ></checkbox-component>

          <checkbox-component
            name="flexCheckDefault2"
            label="Checked checkbox"
            v-model="checked"
          ></checkbox-component>

          <checkbox-component
            name="flexCheckDefault3"
            label="Checked checkbox"
            v-model="checked"
            help="Help text"
          ></checkbox-component>

          <checkbox-component
            name="flexCheckDefault4"
            label="Checked checkbox"
            v-model="checked"
            error="Please enter a message in the textarea."
          ></checkbox-component>

          <checkbox-component
            name="flexCheckDisabled"
            label="Disabled checkbox"
            disabled
            v-model="checked"
          ></checkbox-component>

          <checkbox-component
            name="flexCheckDisabled2"
            label="Disabled checkbox"
            disabled
          ></checkbox-component>
        </div>

        <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Default checked radio
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input is-invalid" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
            <label class="form-check-label" for="flexRadioDefault3">
              Default radio
            </label>
            <div class="invalid-feedback">Please enter a message in the textarea.</div>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
            <label class="form-check-label" for="flexRadioDisabled">
              Disabled radio
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
            <label class="form-check-label" for="flexRadioCheckedDisabled">
              Disabled checked radio
            </label>
          </div>
        </div>

      </div>


      <div class="h1 mt-4 fw-bolder">Pagination</div>

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>

      <div class="h1 mt-4 fw-bolder">Breadcrumbs</div>


      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

    </div>


    <div class="mt-4">

      <div class="h1 mb-3 fw-bolder">Alerts</div>

      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div class="alert alert-info" role="alert">
        A simple info alert—check it out!
      </div>
      <div class="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
      <div class="alert alert-dark" role="alert">
        A simple dark alert—check it out!
      </div>
    </div>

    <div class="mt-4">
      <div class="h1 fw-bolder mb-3">Modals</div>


      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>
      <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
        Large static backdrop modal
      </button>
      <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
        Extra Large static backdrop modal
      </button>
      <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
        Small Large static backdrop modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>
                Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.
              </p>
              <p>
                Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.
              </p>
              <p>
                Теперь никто не сможет обвинить вас в плагиате, ибо каждый текст Яндекс.Рефератов неповторим.
              </p>
              <p>
                Текстами рефератов можно пользоваться совершенно бесплатно, однако при транслировании и предоставлении текстов в массовое пользование ссылка на Яндекс.Рефераты обязательна.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel2">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>
                Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.
              </p>
              <p>
                Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.
              </p>
              <p>
                Теперь никто не сможет обвинить вас в плагиате, ибо каждый текст Яндекс.Рефератов неповторим.
              </p>
              <p>
                Текстами рефератов можно пользоваться совершенно бесплатно, однако при транслировании и предоставлении текстов в массовое пользование ссылка на Яндекс.Рефераты обязательна.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel3">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>
                Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.
              </p>
              <p>
                Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.
              </p>
              <p>
                Теперь никто не сможет обвинить вас в плагиате, ибо каждый текст Яндекс.Рефератов неповторим.
              </p>
              <p>
                Текстами рефератов можно пользоваться совершенно бесплатно, однако при транслировании и предоставлении текстов в массовое пользование ссылка на Яндекс.Рефераты обязательна.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>


      <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel4" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel4">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>
                Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.
              </p>
              <p>
                Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.
              </p>
              <p>
                Теперь никто не сможет обвинить вас в плагиате, ибо каждый текст Яндекс.Рефератов неповторим.
              </p>
              <p>
                Текстами рефератов можно пользоваться совершенно бесплатно, однако при транслировании и предоставлении текстов в массовое пользование ссылка на Яндекс.Рефераты обязательна.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="mt-4">
      <div class="h1 fw-bolder mb-3">Accordion</div>

      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well
              as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well
              as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>

  </base-page-layout>
</template>

<script lang="ts">
import BasePageLayout from "../components/Layout/BasePageLayout.vue";
import InputTextComponent from "../components/Forms/InputTextComponent.vue";
import TextareaComponent from "../components/Forms/TextareaComponent.vue";
import SelectComponent from "../components/Forms/SelectComponent.vue";
import CheckboxComponent from "../components/Forms/CheckboxComponent.vue";

export default {
  name: "StyleGuide",
  components: {CheckboxComponent, SelectComponent, TextareaComponent, InputTextComponent, BasePageLayout},
  data() {
    return {
      checked: true,
      selectedValue: '',
      selectOptions: [
        {name: 'Test1', id: 1},
        {name: 'Test2', id: 2},
        {name: 'Test3', id: 3}
      ]
    }
  }
}
</script>
