<script context="module">
</script>

<svelte:head>
	<title>Titre de l'article - TU4EVER</title>
</svelte:head>

<div class="content">
	<h1>Titre de l'article</h1>

	<p class="paragraphe">
		<span class="accent-color">Paragraphe introductif avec texte couleur</span> - 
        <span class="secondary-color">Autre couleur pour texte</span> - 
        <span class="tertiary-color">Autre couleur pour texte</span> -
        <span class="quartiary-color">Autre couleur pour texte</span> -
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum ex tempore sunt rem labore sit, et ab in praesentium doloremque, beatae odit assumenda enim! Blanditiis aspernatur quibusdam laboriosam aut.
	</p>

    <!-- IMAGE -->

	<img src="/images/205-neige.jpg" class="img-fluid rounded mx-auto d-block" alt="Desc">

    <!-- DEUX COLONNES -->

	<div class="container">
		<div class="row">
			<div class="col-sm">
				<br/>
				<p class="paragraphe">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aliquid eum, accusamus laudantium tenetur fugit reiciendis rem vitae soluta odio porro vero illo. Voluptatem amet quia, cum iure iusto autem.
				</p>
			</div>
			<div class="col-sm">
				<br/>
				<p class="paragraphe">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consectetur molestiae ducimus mollitia quo minus expedita tempora, aspernatur suscipit eos inventore. Hic optio, quaerat commodi laborum eligendi facilis minima accusantium!
				</p>
		  	</div>
		</div>
	  </div>

      <!-- TROIS COLONNES -->

	<div class="container">
		<div class="row">
			<div class="col-sm">
				<br/>
				<p class="paragraphe">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aliquid eum, accusamus laudantium tenetur fugit reiciendis rem vitae soluta odio porro vero illo. Voluptatem amet quia, cum iure iusto autem.
				</p>
			</div>
			<div class="col-sm">
				<br/>
				<p class="paragraphe">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consectetur molestiae ducimus mollitia quo minus expedita tempora, aspernatur suscipit eos inventore. Hic optio, quaerat commodi laborum eligendi facilis minima accusantium!
				</p>
		  	</div>
              <div class="col-sm">
				<br/>
				<p class="paragraphe">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aspernatur sit atque omnis cupiditate qui ipsam assumenda quos. Amet similique qui sint neque distinctio necessitatibus voluptatem minus, debitis veniam temporibus.
				</p>
			</div>
		</div>
    </div>

    <!-- TITRES -->

    <h2>Sous titre</h2>

    <h3>Sous sous titre</h3>

    <!-- LISTES -->

    <ul class="list">
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
    </ul>

    <ol class="list">
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
    </ol>

    <!-- IMAGE AVEC LEGENDE -->

    <figure class="figure">
        <img src="/images/205-neige.jpg" class="figure-img img-fluid rounded" alt="Desc">
        <figcaption class="figure-caption text-right text-light">Légende</figcaption>
    </figure>

    <!-- JUMBOTRON -->

    <div class="jumbotron">
    <h1 class="display-4">Titre joli</h1>
    <p class="lead">Texte important, citation, etc</p>

    <!-- SEPARATOR -->
    <hr class="my-4">
    <p>Autre texte</p>
    </div>

    <!-- BADGES -->

    <span class="badge badge-accent">Accent</span>
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-tertiary">Tertiary</span>
    <span class="badge badge-quartiary">Quartiary</span>

    <!-- TABLEAU -->

    <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
    </table>

	
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

    .paragraphe {
		color: white;
	}

    .accent-color {
        color: var(--accent-color);
    }

    .secondary-color {
        color: var(--secondary-color);
    }

    .tertiary-color {
        color: var(--tertiary-color);
    }

    .quartiary-color {
        color: var(--quartiary-color);
    }

    h2 {
        font-size: x-large;
        text-align: center;
    }

    h3 {
        font-size: large;
        text-align: center;
        color: var(--accent-color);
    }

    .list {
        color: white;
    }

    .badge-accent {
        background-color: var(--accent-color);
    }

    .badge-primary {
        background-color: var(--primary-color);
    }

    .badge-secondary {
        background-color: var(--secondary-color);
    }

    .badge-tertiary {
        background-color: var(--tertiary-color);
    }

    .badge-quartiary {
        background-color: var(--quartiary-color);
    }
    
</style>