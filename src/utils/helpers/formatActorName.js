export const formatActorName = (actor) => {
    return `${actor.name} (${actor.birthday ? actor.birthday.substring(0, 4) : "Desconocido"})`
}