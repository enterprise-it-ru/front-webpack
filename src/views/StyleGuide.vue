<template>
  <base-page-layout>

    <h2 class="mt-4">Кнопки</h2>

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


    <h2 class="mt-4">Формы</h2>

    <div class="row">
      <div class="col">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address (disabled)</label>
          <input type="email" class="form-control" disabled id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address (readonly)</label>
          <input type="email" class="form-control" readonly id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control is-invalid" id="exampleFormControlInput1" placeholder="name@example.com">
          <div class="invalid-feedback">Please enter a message in the input.</div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="mb-3">
          <label for="validationTextarea" class="form-label">Textarea</label>
          <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="validationTextarea" class="form-label">Textarea Disabled</label>
          <textarea class="form-control" id="validationTextarea" disabled placeholder="Required example textarea" required></textarea>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="validationTextarea" class="form-label">Textarea Readonly</label>
          <textarea class="form-control" id="validationTextarea" readonly placeholder="Required example textarea" required></textarea>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="validationTextarea" class="form-label">Textarea</label>
          <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
          <div class="invalid-feedback">Please enter a message in the textarea.</div>
        </div>
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
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col">
        <select class="form-select" aria-label="Default select example" disabled>
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col">
        <select class="form-select is-invalid" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="invalid-feedback">Please enter a message in the textarea.</div>
      </div>
    </div>

    <div class="mt-4">
      <h3>Checkboxes</h3>

      <div class="row">

        <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input is-invalid" type="checkbox" value="" id="flexCheckChecked2" checked>
            <label class="form-check-label" for="flexCheckChecked2">Checked checkbox</label>
            <div class="invalid-feedback">Please enter a message in the textarea.</div>
          </div>
          <div class="form-check mt-3">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled>
            <label class="form-check-label" for="flexCheckIndeterminateDisabled">
              Disabled indeterminate checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
            <label class="form-check-label" for="flexCheckDisabled">
              Disabled checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Disabled checked checkbox
            </label>
          </div>
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


      <div class="h2 mt-4">Pagination</div>

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>

      <div class="h2 mt-4">Breadcrumbs</div>


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
  </base-page-layout>
</template>

<script lang="ts">
import BasePageLayout from "../components/Layout/BasePageLayout.vue";

export default {
  name: "StyleGuide",
  components: {BasePageLayout},
  data() {
    return {}
  }
}
</script>
