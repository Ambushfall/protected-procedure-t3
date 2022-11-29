import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
  me:protectedProcedure.query(async ({ctx}) => {
    const userResponse = await ctx.prisma.user.findFirst({
        where: {id : ctx.session.user.id},
        select: {image : true}
    });

    return userResponse?.image;
  })
});
